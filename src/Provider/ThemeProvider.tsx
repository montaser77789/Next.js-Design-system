"use client";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import {type ThemeProviderProps } from "next-themes/dist/types";
import React, { ReactNode } from "react";
interface Ipropse {
  children: ReactNode;
}
const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
};

export default ThemeProvider;
