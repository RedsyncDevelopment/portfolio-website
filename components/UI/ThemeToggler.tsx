import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <button
      className="w-8 h-8 bg-blue-100 rounded-lg dark:bg-primary-blue-400 flex items-center justify-center hover:ring-2 ring-primary-blue-700 transition-all duration-300 focus:outline-none"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle Dark Mode"
    >
      {theme === "light" ? (
        <BsFillMoonFill className="text-primary-blue-400 w-5 h-5" />
      ) : (
        <BsFillSunFill className="text-white w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggler;
