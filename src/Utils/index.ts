import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function tailsindCMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
