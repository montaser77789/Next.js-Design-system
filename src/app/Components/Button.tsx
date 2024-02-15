import { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { tailsindCMerge } from "@/Utils";

const buttonVarients = cva(
  " inline-flex items-center  duration-200 justify-center",
  {
    variants: {
      intent: {
        primary: " bg-primary ",
        outline:
          "bg-transparent text-black  dark:text-white border border-gray-300",
        destructive: "bg-destructive text-black dark:text-white   ",
      },
      size: {
        xs: "px-2 text-xs h-6",
        sm: "px-6 text-sm h-8",
        base: "px-4 text-base h-10",
        lg: "px-6 text-lg h-12",
      },
      fullWidth: {
        true: "w-full ",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm	",
        md: "rounded-md	",
        lg: "rounded-lg	",
        xl: "rounded-xl	",
        "2xl": "rounded-2xl	",
        full: "rounded-full	",
      },
    },

    defaultVariants: {
      intent: "primary",
      size: "base",
      rounded: "md",
    },
  }
);

interface Ipropse
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVarients> {
  children: ReactNode;
  className?: string;
}
function Button({
  children,
  className,
  size,
  fullWidth,
  intent,
  rounded,
  ...rest
}: Ipropse) {
  return (
    <>
      <button
        className={tailsindCMerge(
          buttonVarients({ intent, size, rounded, fullWidth })
        )}
        {...rest}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
