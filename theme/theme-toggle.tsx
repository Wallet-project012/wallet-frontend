"use client";
import { useTheme } from "next-themes";
import React from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      className="cursor-pointer bg-white dark:bg-secondary-500 text-primary-500 dark:text-[#ffffffcf] hover:bg-hover-background active:bg-active-background rounded-md border border-button-border-color p-0.5 [transition:background_20ms_ease-in,_color_0.15s]"
      title="Toggle theme"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      toggle mode
    </button>
  );
};

export default ThemeToggle;
