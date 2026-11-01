import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { DialRoot } from "dialkit"
import "dialkit/styles.css"

import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { Toaster } from "@/components/ui/toast"
import { TooltipProvider } from "@/components/ui/tooltip"
import { installForcedStates } from "@/gallery/forced-states"
import { ThemeController } from "@/theme/theme-controller"

installForcedStates()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster>
          <App />
          <ThemeController />
          <DialRoot position="top-right" productionEnabled />
        </Toaster>
      </TooltipProvider>
    </ThemeProvider>
  </StrictMode>
)
