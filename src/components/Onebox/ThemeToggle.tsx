import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    const mode = darkMode ? "dark" : "light";

    root.classList.remove(darkMode ? "light" : "dark");
    root.classList.add(mode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className='mr-4'>
      <button
        className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-3 rounded-full flex items-center'
        onClick={toggleTheme}
        aria-label='Toggle Dark Mode'
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
}

export default ThemeToggle;
