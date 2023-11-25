import { Children } from "@/app/types"
import { cva, VariantProps } from "class-variance-authority"
import Link from "next/link"
import { LeftArrow } from "./icons/illustrations"
import clsx from "clsx"

type T_Button = Children & {
  href: string,
  icon?: boolean,
  className?: string
} & VariantProps<typeof buttonClasses>

const buttonClasses = cva(
  "rounded-2xl inline-flex items-center transition-medium [&_.icon-wrapper]:rounded-full [&_.icon-wrapper]:-mr-1 [&_.icon-wrapper]:pl-2 icon-wrapper-parent",
  {
  variants:{
    variant: {
      primary: "bg-primary-gradient",
      secondary: 
      ["font-medium text-off-white bg-white/10 hover:bg-white/20 border border-white/5 backdrop-blur-[12px]"]
    },
    size: {
      small: "text-xs px-3 h-7",
      medium: "text-sm px-4 h-8",
      large: "text-md px-6 h-12",
      custom: ""
    }
  },
  defaultVariants:{
    variant: "primary",
    size: "medium",
  }
})

export function IconWrapper ({children}: Children){
  return <span className="icon-wrapper">{children}</span>;
}

export function Button ({children, href, variant, size, icon = false, className} :T_Button){
  return (
    <Link className={clsx(buttonClasses({ variant, size }), className)} href={href}>
      {children}
      {icon ? (
        <IconWrapper>
          <LeftArrow />
        </IconWrapper>
      ) : null}
    </Link>
  );
}