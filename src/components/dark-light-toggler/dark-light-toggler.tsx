"use client";

import { DarkModeIcon, LightModeIcon } from "@/assets/icons/icons";
import { useEffect, useState } from "react";

export function DarkLightToggler(): JSX.Element {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <button
      className="fixed right-7 bottom-7 rounded-full p-1 bg-black text-white dark:bg-white dark:text-black"
      onClick={() => setDarkMode((pre) => !pre)}
    >
      {!darkMode ? (
        <DarkModeIcon width={30} height={30} />
      ) : (
        <LightModeIcon width={30} height={30} />
      )}
    </button>
  );
}
