/* eslint-disable react-refresh/only-export-components */

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center cursor-pointer whitespace-nowrap rounded-[12px] border-[3px] border-black font-bold font-wosker transition-all duration-150 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] uppercase tracking-wider relative overflow-hidden active:translate-x-[2px] active:translate-y-[2px]",
  {
    variants: {
      variant: {
        default:
          "bg-green-app text-white shadow-lg hover:translate-x-[1px] hover:translate-y-[1px] ",
        subscribe:
          "bg-green-500 text-white shadow-lg hover:bg-green-400",
        destructive:
          "bg-red-500 text-white shadow-lg hover:bg-red-400 focus-visible:ring-destructive/20",
        outline:
          "border-black bg-white shadow-lg hover:bg-gray-50 text-black",
        secondary:
          "bg-blue-500 text-white shadow-lg hover:bg-blue-400",
        ghost:
          "hover:bg-gray-100 hover:text-gray-900 border-transparent before:bg-transparent",
        link: "text-primary underline-offset-4 hover:underline border-transparent before:bg-transparent",
      },
      size: {
        default: "h-[72px] px-6 py-4 text-[24px] ",
        sm: "h-10 px-4 py-2 text-sm rounded-[12px] before:rounded-[9px]",
        lg: "h-16 px-8 py-4 text-lg rounded-[20px] before:rounded-[17px]",
        icon: "size-12 rounded-[16px] before:rounded-[13px]",
        xl: "h-20 px-12 py-5 text-xl rounded-[24px] before:rounded-[21px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  withShadow = true,
  children,
  ...props
}: React.ComponentProps<"button"> & { withShadow?: boolean } &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
      style={{
        border: "3px solid #222",
        boxShadow: withShadow ? "-4px 4px 0px #222" : "none",
      }}
    >
      {children}
    </Comp>
  )
}


export { Button, buttonVariants }