import type { Children } from "@/app/layout"


export const HeroTitle = ({ children }: Children) => {
  return (

    <h1 className="text-5xl my-6">{children}</h1>
  )
}
export const HeroSub = ({ children }: Children) => {
  return (

    <p className="text-lg mb-12">{children}</p>
  )
}

export const Hero = ({ children }: Children) => {
  return (
    <div className="text-center">
      {children}
    </div>
  )
}