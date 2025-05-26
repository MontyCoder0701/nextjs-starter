import { useState } from "react";

export function useTheme() {
  const [isLight, setIsLight] = useState(true);

  const toggleTheme = () => {
    setIsLight(!isLight);
    document.documentElement.classList.toggle("dark", isLight);
  };

  return { isLight, toggleTheme };
}
