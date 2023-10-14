import { ClassChildren } from "@/app/types"
import { clsx } from "clsx";


export const HeroTitle = ({ children, className }: ClassChildren) => {
  return (
    <h1
      className={clsx("text-5xl md:text-7xl my-6 font-medium hero-gradient background-clip transparent",className)}>
      {children}
    </h1>
  );
}
export const HeroSub = ({ children, className }: ClassChildren) => {
  return (
    <p className={clsx("text-ml md:text-lg mb-12", className)}>{children}</p>
  );
}

export const Hero = ({ children, className }: ClassChildren) => {
  return (
    <div className={clsx(className, "text-center flex items-center flex-col")}>
      {children}
    </div>
  )
}