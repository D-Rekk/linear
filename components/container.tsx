import { Children } from "@/app/layout"

export const Container = ({children}: Children) => {
  return (
    <div className="max-w-[120rem] mx-auto">
      {children}
    </div>
  )
}