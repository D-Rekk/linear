import { ClassChildren } from "@/app/types"
import { twMerge } from "tailwind-merge"


export const HeroTitle = ({ children, className }: ClassChildren) => {
  return (

    <h1 className={twMerge(className,"text-5xl md:text-7xl my-6 font-medium hero-gradient background-clip transparent")}>{children}</h1>
  )
}
export const HeroSub = ({ children, className }: ClassChildren) => {
  return (

    <p className={twMerge(className,"text-ml md:text-lg mb-12")}>{children}</p>
  )
}

export const Hero = ({ children, className }: ClassChildren) => {
  return (
    <div className={twMerge(className, "text-center flex items-center flex-col")}>
      {children}
    </div>
  )
}