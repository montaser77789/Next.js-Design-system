"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Button from "../Button";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="text-forground  text-center">
      {isClient ? (
        <>
          <h3 >The current theme is: {theme}</h3>
          <br />
          <div className="space-x-2 m-2">
            <Button intent={"primary"} onClick={() => setTheme("light")}>
              Light Mode
            </Button>
            <Button onClick={() => setTheme("dark")}>Dark Mode</Button>
          </div>
        </>
      ) : (
        "Prerendered"
      )}
    </div>
  );
};
export default ThemeChanger;
