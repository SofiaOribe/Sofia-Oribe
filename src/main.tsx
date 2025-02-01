import { StrictMode, Suspense } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import Maintenance from "./components/maintenance/Maintenance.tsx"

const container = document.getElementById("root")
const isMaintenanceMode = false

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

if (container) {
  const root = createRoot(container)

  root.render(
    <Suspense fallback={null}>
      <Provider store={store}>
        <BrowserRouter>{isMaintenanceMode ? <Maintenance /> : <App />}</BrowserRouter>
      </Provider>
    </Suspense>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}

