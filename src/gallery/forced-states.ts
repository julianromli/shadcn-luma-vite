// Real :hover, :focus and :active styles need a mouse or keyboard. To show
// them side by side, this copies every CSS rule that uses one of those
// pseudo-classes and swaps the pseudo-class for a data attribute. An element
// with `data-force-hover` then looks the same as a hovered one.

export type ForcedState = "hover" | "focus" | "active"

const PSEUDO: Record<ForcedState, RegExp> = {
  hover: /(?<!\\):hover(?![\w-])/g,
  focus: /(?<!\\):focus(?:-visible|-within)?(?![\w-])/g,
  active: /(?<!\\):active(?![\w-])/g,
}

const ANY_PSEUDO = /(?<!\\):(?:hover|focus|focus-visible|focus-within|active)(?![\w-])/

const STYLE_ID = "gallery-forced-states"

function rewrite(cssText: string) {
  let text = cssText
  for (const [state, pattern] of Object.entries(PSEUDO)) {
    text = text.replace(pattern, `[data-force-${state}]`)
  }
  return text
}

function collect(rules: CSSRuleList, out: string[]) {
  for (const rule of Array.from(rules)) {
    if (rule instanceof CSSStyleRule) {
      if (ANY_PSEUDO.test(rule.cssText)) {
        out.push(rewrite(rule.cssText))
      }
      continue
    }

    const inner: string[] = []

    if (rule instanceof CSSMediaRule) {
      collect(rule.cssRules, inner)
      if (inner.length) out.push(`@media ${rule.conditionText}{${inner.join("")}}`)
    } else if (rule instanceof CSSSupportsRule) {
      collect(rule.cssRules, inner)
      if (inner.length) out.push(`@supports ${rule.conditionText}{${inner.join("")}}`)
    } else if (rule instanceof CSSLayerBlockRule) {
      collect(rule.cssRules, inner)
      if (inner.length) out.push(`@layer ${rule.name}{${inner.join("")}}`)
    }
  }
}

function build() {
  const out: string[] = []

  for (const sheet of Array.from(document.styleSheets)) {
    if (sheet.ownerNode instanceof Element && sheet.ownerNode.id === STYLE_ID) {
      continue
    }
    try {
      collect(sheet.cssRules, out)
    } catch {
      // A cross-origin sheet does not expose its rules.
    }
  }

  return out.join("\n")
}

export function installForcedStates() {
  const style = document.createElement("style")
  style.id = STYLE_ID
  document.head.append(style)

  let frame = 0
  const update = () => {
    cancelAnimationFrame(frame)
    frame = requestAnimationFrame(() => {
      style.textContent = build()
    })
  }

  update()
  window.addEventListener("load", update)

  // Vite adds and replaces <style> tags during development.
  const observer = new MutationObserver((records) => {
    if (records.some((record) => record.target !== style)) update()
  })
  observer.observe(document.head, {
    childList: true,
    subtree: true,
    characterData: true,
  })
}
