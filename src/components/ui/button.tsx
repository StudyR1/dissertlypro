import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-sans relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-midnight-soft shadow-subtle hover:shadow-card",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-muted hover:text-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-cream-rich",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-copper underline-offset-4 hover:underline",
        // Premium brand variants
        copper: [
          "bg-gradient-to-r from-copper via-copper-glow to-copper-dark text-white font-semibold",
          "shadow-copper hover:shadow-elevated",
          "hover:scale-[1.03] active:scale-[0.98]",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/25 before:to-white/0",
          "before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700",
        ].join(" "),
        hero: [
          "bg-gradient-to-r from-copper-dark via-copper to-copper-glow text-white font-semibold tracking-wide",
          "shadow-copper hover:shadow-elevated",
          "hover:scale-[1.03] active:scale-[0.98]",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent",
          "before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700",
        ].join(" "),
        "hero-outline": [
          "border-2 border-primary-foreground/25 text-primary-foreground bg-transparent",
          "hover:bg-primary-foreground/10 hover:border-primary-foreground/40",
          "font-medium backdrop-blur-sm",
        ].join(" "),
        midnight: [
          "bg-gradient-to-br from-midnight-rich to-midnight text-primary-foreground font-semibold",
          "shadow-card hover:shadow-elevated",
          "hover:from-midnight-soft hover:to-midnight-rich",
        ].join(" "),
        "midnight-outline": [
          "border-2 border-primary/80 text-primary bg-transparent",
          "hover:bg-primary hover:text-primary-foreground",
          "font-medium transition-all duration-300",
        ].join(" "),
        premium: [
          "bg-gradient-to-br from-midnight via-midnight-rich to-midnight-soft text-primary-foreground",
          "font-semibold shadow-elevated",
          "before:absolute before:inset-0 before:bg-gradient-to-t before:from-copper/20 before:to-transparent",
          "hover:before:from-copper/30",
        ].join(" "),
        glass: [
          "bg-white/10 backdrop-blur-md border border-white/20 text-white",
          "hover:bg-white/20 hover:border-white/30",
          "shadow-subtle",
        ].join(" "),
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-md px-4 text-sm",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-base font-semibold",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
