import { ComponentType } from "react"
import { BrowserRouter } from "react-router-dom"

export function withMainData<T extends JSX.IntrinsicAttributes>(Content: ComponentType<T>): ComponentType<T> {
  return function MainDataContent(props) {
    return (
      <BrowserRouter>
        <Content {...props} />
      </BrowserRouter>
    )
  }
}

