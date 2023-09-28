import { Children } from "@/app/layout"
import { twMerge } from "tailwind-merge"

type T_Container = Children & {
  className?: string
}
export const Container = ({children, className} : T_Container) => {
  return (
    <div className={twMerge(className, "max-w-[120rem] mx-auto")}>
      {children}
    </div>
  )
}