import { StrictMode, Suspense } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import Maintenance from "./components/maintenance/Maintenance.tsx"
import { store } from "./app/store.ts"

const container = document.getElementById("root")
const isMaintenanceMode = false

if (container) {
  const root = createRoot(container)
  root.render(
    <StrictMode>
      <Suspense fallback={null}>
        <Provider store={store}>{isMaintenanceMode ? <Maintenance /> : <App />}</Provider>
      </Suspense>
    </StrictMode>,
  )
} else {
  throw new Error("Root element with ID 'root' was not found in the document.")
}

