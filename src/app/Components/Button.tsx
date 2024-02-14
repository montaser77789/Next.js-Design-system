import { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { tailsindCMerge } from "@/Utils";

const buttonVarients = cva(
  " inline-flex items-center  duration-200  rounded-md ",
  {
    variants: {
      intent: {
        primary: " bg-indigo-700 text-white dark:bg-white dark:text-black ",
        outline:
          "bg-transparent text-black  dark:text-white border border-gray-300",
        destructive: "bg-red-600 text-black dark:text-white dark:bg-red-800  ",
      },
      size: {
        xs: "px-2 text-xs h-6",
        sm: "px-6 text-sm h-8",
        base: "px-4 text-base h-10",
        lg: "px-6 text-lg h-12",
      },
      fullWidth: {
        true: "w-full justify-center",
      },
    },

    defaultVariants: {
      intent: "primary",
      size: "base",
    },
  }
);

interface Ipropse
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVarients> {
  children: ReactNode;
  className?: string;
}
function Button({ children, className, size,fullWidth, intent, ...rest }: Ipropse) {
  return (
    <>
      <button
        className={tailsindCMerge(buttonVarients({ intent, size,fullWidth }))}
        {...rest}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
