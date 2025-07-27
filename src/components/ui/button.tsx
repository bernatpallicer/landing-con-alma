import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-lavender-sm hover:shadow-lavender-md hover:scale-105 transform transition-all duration-300",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm hover:shadow-md",
        outline: "border border-primary/20 bg-background/80 backdrop-blur-sm hover:bg-primary/5 hover:text-primary hover:border-primary/40 shadow-xs hover:shadow-lavender-sm",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-xs hover:shadow-sm",
        ghost: "hover:bg-accent hover:text-accent-foreground transition-colors duration-200",
        link: "text-primary underline-offset-4 hover:underline transition-colors duration-200",
        // DAENA Premium Variants
        premium: "bg-gradient-primary text-primary-foreground shadow-lavender-md hover:shadow-glow hover:scale-105 transform transition-all duration-300 font-semibold border border-primary/20",
        aurora: "bg-gradient-aurora text-white shadow-aurora hover:shadow-glow hover:scale-105 transform transition-all duration-300 font-semibold animate-aurora bg-size-200",
        magnetic: "bg-primary text-primary-foreground shadow-lavender-lg hover:shadow-glow hover:scale-110 transform transition-all duration-300 font-bold hover:animate-magnetic",
        hero: "bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-aurora hover:scale-105 transform transition-all duration-400 font-bold text-lg px-8 py-4 rounded-2xl border border-primary/30 hover:border-primary/50",
        cta: "bg-gradient-aurora text-white shadow-aurora hover:shadow-glow hover:scale-110 transform transition-all duration-400 font-bold animate-glow border border-white/20 hover:border-white/40",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
