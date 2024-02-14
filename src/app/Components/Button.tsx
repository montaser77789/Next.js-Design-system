import { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { tailsindCMerge } from "@/Utils";

const buttonVarients = cva(" block duration-200  rounded-md font-semibold", {
  variants: {
    intent: {
      primary: " bg-black text-white black:bg-white black:text-black ",
      outline:
        "bg-transparent text-black  dark:text-white border border-gray-300",
      destructive:
        "bg-red-600 text-black dark:text-white dark:bg-red-800  border border-gray-30",
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

interface Ipropse
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVarients> {
  children: ReactNode;
  className?: string;
}
function Button({ children, className, intent, ...rest }: Ipropse) {
  return (
    <>
      <button className={tailsindCMerge(buttonVarients({ intent }))} {...rest}>
        {children}
      </button>
    </>
  );
}

export default Button;
