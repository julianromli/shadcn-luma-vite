import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceDescription,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Questionnaire",
  description:
    "Asks the user a set of questions, one at a time. An AI agent can use it to get more data from the user.",
  category: "AI and chat",
}

function QuestionnaireDemo() {
  return (
    <Questionnaire
      className="max-w-md"
      shortcuts="letters"
      onSubmit={(event) => event.preventDefault()}
    >
      <QuestionnaireProgress />
      <QuestionnaireItem name="framework" required>
        <QuestionnaireTitle>Which framework do you use?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="react">React</QuestionnaireChoice>
          <QuestionnaireChoice value="vue">Vue</QuestionnaireChoice>
          <QuestionnaireChoice value="svelte">Svelte</QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>
      <QuestionnaireItem name="features" multiple>
        <QuestionnaireTitle>Which features do you need?</QuestionnaireTitle>
        <QuestionnaireDescription>Select all that apply.</QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="dark-mode">Dark mode</QuestionnaireChoice>
          <QuestionnaireChoice value="rtl">Right-to-left text</QuestionnaireChoice>
          <QuestionnaireChoice value="charts">Charts</QuestionnaireChoice>
        </QuestionnaireChoices>
      </QuestionnaireItem>
      <QuestionnaireItem name="team">
        <QuestionnaireTitle>What is the name of your team?</QuestionnaireTitle>
        <QuestionnaireInput placeholder="Team name" />
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireSkip />
        <QuestionnaireNext />
        <QuestionnaireSubmit />
      </QuestionnaireActions>
    </Questionnaire>
  )
}

export default function QuestionnaireDocs() {
  return (
    <>
      <Section title="Usage" columns={1}>
        <Example title="Three questions" canvas source="QuestionnaireDemo">
          <QuestionnaireDemo />
        </Example>
      </Section>

      <Section
        title="Choice states"
        description="Hover and focus are forced so that you can compare them."
      >
        <Example title="Default" canvas>
          <Questionnaire className="max-w-xs">
            <QuestionnaireItem name="plan-default">
              <QuestionnaireChoices>
                <QuestionnaireChoice value="pro">Pro plan</QuestionnaireChoice>
              </QuestionnaireChoices>
            </QuestionnaireItem>
          </Questionnaire>
        </Example>
        <Example title="Hover" state="hover">
          <Questionnaire className="max-w-xs">
            <QuestionnaireItem name="plan-hover">
              <QuestionnaireChoices>
                <QuestionnaireChoice value="pro">Pro plan</QuestionnaireChoice>
              </QuestionnaireChoices>
            </QuestionnaireItem>
          </Questionnaire>
        </Example>
        <Example title="Focus" state="focus">
          <Questionnaire className="max-w-xs">
            <QuestionnaireItem name="plan-focus">
              <QuestionnaireChoices>
                <QuestionnaireChoice value="pro">Pro plan</QuestionnaireChoice>
              </QuestionnaireChoices>
            </QuestionnaireItem>
          </Questionnaire>
        </Example>
        <Example title="Checked" canvas>
          <Questionnaire className="max-w-xs">
            <QuestionnaireItem name="plan-checked">
              <QuestionnaireChoices>
                <QuestionnaireChoice value="pro" defaultChecked>
                  Pro plan
                </QuestionnaireChoice>
              </QuestionnaireChoices>
            </QuestionnaireItem>
          </Questionnaire>
        </Example>
        <Example title="Checked, multiple" canvas>
          <Questionnaire className="max-w-xs">
            <QuestionnaireItem name="plan-multiple" multiple>
              <QuestionnaireChoices>
                <QuestionnaireChoice value="pro" defaultChecked>
                  Pro plan
                </QuestionnaireChoice>
              </QuestionnaireChoices>
            </QuestionnaireItem>
          </Questionnaire>
        </Example>
        <Example title="Disabled">
          <Questionnaire className="max-w-xs">
            <QuestionnaireItem name="plan-disabled">
              <QuestionnaireChoices>
                <QuestionnaireChoice value="pro" disabled>
                  Pro plan
                </QuestionnaireChoice>
              </QuestionnaireChoices>
            </QuestionnaireItem>
          </Questionnaire>
        </Example>
        <Example title="Invalid">
          <Questionnaire className="max-w-xs">
            <QuestionnaireItem name="plan-invalid" invalid>
              <QuestionnaireChoices>
                <QuestionnaireChoice value="pro">Pro plan</QuestionnaireChoice>
              </QuestionnaireChoices>
              <QuestionnaireError>Select a plan.</QuestionnaireError>
            </QuestionnaireItem>
          </Questionnaire>
        </Example>
        <Example title="With description" canvas>
          <Questionnaire className="max-w-xs">
            <QuestionnaireItem name="plan-description">
              <QuestionnaireChoices>
                <QuestionnaireChoice value="pro">
                  Pro plan
                  <QuestionnaireChoiceDescription>
                    For teams of up to 10 people.
                  </QuestionnaireChoiceDescription>
                </QuestionnaireChoice>
              </QuestionnaireChoices>
            </QuestionnaireItem>
          </Questionnaire>
        </Example>
      </Section>

      <Section
        title="Input states"
        description="Focus is forced so that you can compare it."
      >
        <Example title="Default" canvas>
          <Questionnaire className="max-w-xs">
            <QuestionnaireItem name="email-default">
              <QuestionnaireInput type="email" placeholder="Email" />
            </QuestionnaireItem>
          </Questionnaire>
        </Example>
        <Example title="Focus" state="focus">
          <Questionnaire className="max-w-xs">
            <QuestionnaireItem name="email-focus">
              <QuestionnaireInput type="email" placeholder="Email" />
            </QuestionnaireItem>
          </Questionnaire>
        </Example>
        <Example title="Disabled">
          <Questionnaire className="max-w-xs">
            <QuestionnaireItem name="email-disabled">
              <QuestionnaireInput type="email" placeholder="Email" disabled />
            </QuestionnaireItem>
          </Questionnaire>
        </Example>
        <Example title="Invalid">
          <Questionnaire className="max-w-xs">
            <QuestionnaireItem name="email-invalid" invalid>
              <QuestionnaireInput
                type="email"
                placeholder="Email"
                aria-invalid
              />
              <QuestionnaireError>Type a correct email.</QuestionnaireError>
            </QuestionnaireItem>
          </Questionnaire>
        </Example>
      </Section>
    </>
  )
}
