import type { ClassChildren } from "@/app/types"
import { twMerge } from "tailwind-merge"


export const Container = ({children, className} : ClassChildren) => {
  return (
    <div className={twMerge(className, "max-w-[120rem] mx-auto px-8")}>
      {children}
    </div>
  )
}