"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="text-forground">
      {isClient ? (
        <>
          The current theme is: {theme}
          <br />
          <button onClick={() => setTheme("light")}>Light Mode</button>
          <button onClick={() => setTheme("dark")}>Dark Mode</button>
        </>
      ) : (
        "Prerendered"
      )}
    </div>
  );
};
export default ThemeChanger;
