import type { ClassChildren } from "@/app/types"
import { clsx } from "clsx"


export const Container = ({children, className} : ClassChildren) => {
  return (
    <div className={clsx(className, "max-w-[126rem] mx-auto px-8")}>
      {children}
    </div>
  )
}