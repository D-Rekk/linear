import { Children } from "@/app/types"
import { cva, VariantProps } from "class-variance-authority"
import Link from "next/link"

type T_Button = Children & {
  href: string,
} & VariantProps<typeof buttonClasses>

const buttonClasses = cva("rounded-2xl inline-flex items-center transition-medium",{
  variants:{
    variant: {
      primary: "bg-primary-gradient",
      secondary: "",
      tertiary: ""
    },
    size: {
      small: "text-xs px-3 h-7",
      medium: "text-sm px-4 h-8",
      large: "text-md px-6 h-12"
    }
  },
  defaultVariants:{
    variant: "primary",
    size: "medium",
  }
})

export default function Button ({children, href, variant, size} :T_Button){
  return(
    <Link className={buttonClasses({variant, size})} href={href}>
      {children}
    </Link>
  )
}