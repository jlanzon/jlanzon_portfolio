import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { BsFillCloudyFill, BsStarFill } from "react-icons/bs";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import MaxWidthWrapper from "./MaxWidthWrapper";

// Tab Data
const TAB_DATA = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About", path: "/about" },
  { id: 3, title: "Email Drafter", path: "/redraft" },
  { id: 4, title: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mode, setMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    document.documentElement.className = mode;
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggleTheme = useCallback(() => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  return (
    <nav className="sticky top-0 z-30 h-14 border-b dark:border-gray-900 border-gray-200 dark:bg-black/25 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          <Link to="/" className="text-xl hover:blur-[2px] ml-2">
            JLanzon // Portfolio
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <ShiftHightlightTabs />
            <DarkModeToggle mode={mode} toggleTheme={toggleTheme} />
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 bg-white dark:bg-gray-800 focus:outline-none mr-2"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-800 dark:text-white" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-800 dark:text-white" />
            )}
          </button>
        </div>
      </MaxWidthWrapper>
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md flex items-center justify-center md:hidden">
          <div className="flex flex-col items-center space-y-6 p-8 w-full max-w-md">
            <ShiftHightlightTabs mobile />
            <DarkModeToggle mode={mode} toggleTheme={toggleTheme} />
            <button
              onClick={toggleMenu}
              className="mt-4 p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 focus:outline-none"
              aria-label="Close menu"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

const ShiftHightlightTabs = ({ mobile = false }) => {
  const { pathname } = useLocation();
  const selected = TAB_DATA.find((tab) => tab.path === pathname)?.id || 1;

  return (
    <div className={`flex ${mobile ? "flex-col space-y-4 w-full" : "space-x-4"}`}>
      {TAB_DATA.map((tab) => (
        <ToggleButton
          key={tab.id}
          id={tab.id}
          selected={selected}
          path={tab.path}
          title={tab.title}
          mobile={mobile}
        />
      ))}
    </div>
  );
};

const ToggleButton = ({ id, selected, path, title, mobile }) => (
  <div
    className={`rounded-xl transition-colors ${
      selected === id ? "bg-indigo-600" : "bg-zinc-100 dark:bg-zinc-900"
    } ${mobile ? "w-full" : ""}`}
  >
    <Link
      to={path}
      className={`block w-full text-center rounded-xl border py-2 px-4 text-sm font-medium transition-all ${
        selected === id
          ? "-translate-y-1 border-indigo-600 bg-white dark:bg-zinc-800 dark:text-zinc-100 text-indigo-600"
          : "border-zinc-900 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 hover:-rotate-2"
      }`}
    >
      {title}
    </Link>
  </div>
);

const DarkModeToggle = ({ mode, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    className={`p-1 w-16 rounded-full flex shadow-md relative bg-gradient-to-b ${
      mode === "light" ? "justify-end from-blue-500 to-sky-300" : "justify-start from-indigo-600 to-indigo-400"
    }`}
    aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
  >
    <Thumb mode={mode} />
    {mode === "light" && <Clouds />}
    {mode === "dark" && <Stars />}
  </button>
);

const Thumb = ({ mode }) => (
  <motion.div
    layout
    transition={{ duration: 0.75, type: "spring" }}
    className="h-6 w-6 rounded-full overflow-hidden shadow-md relative"
  >
    <div
      className={`absolute inset-0 ${
        mode === "dark"
          ? "bg-slate-100"
          : "animate-pulse bg-gradient-to-tr from-amber-300 to-yellow-500 rounded-full"
      }`}
    />
    {mode === "light" && <SunCenter />}
    {mode === "dark" && <MoonSpots />}
  </motion.div>
);

const SunCenter = () => <div className="absolute inset-1 rounded-full bg-amber-300" />;

const MoonSpots = () => (
  <>
    <motion.div
      initial={{ x: -2, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.15, duration: 0.35 }}
      className="w-2 h-2 rounded-full bg-slate-300 absolute right-1.5 bottom-0.5"
    />
    <motion.div
      initial={{ x: -2, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.35 }}
      className="w-2 h-2 rounded-full bg-slate-300 absolute left-0.5 bottom-2"
    />
    <motion.div
      initial={{ x: -2, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.25, duration: 0.35 }}
      className="w-1 h-1 rounded-full bg-slate-300 absolute right-1 top-1"
    />
  </>
);

const Stars = () => (
  <>
    <motion.span
      animate={{ scale: [0.75, 1, 0.75], opacity: [0.75, 1, 0.75] }}
      transition={{ repeat: Infinity, duration: 5, ease: "easeIn" }}
      className="text-slate-300 text-[8px] absolute right-4 top-1"
    >
      <BsStarFill />
    </motion.span>
    <motion.span
      animate={{ scale: [1, 0.75, 1], opacity: [0.5, 0.25, 0.5] }}
      transition={{ repeat: Infinity, duration: 3.5, ease: "easeIn" }}
      style={{ rotate: "-45deg" }}
      className="text-slate-300 text-xs absolute right-2 top-2"
    >
      <BsStarFill />
    </motion.span>
  </>
);

const Clouds = () => (
  <>
    <motion.span
      animate={{ x: [-10, -5, 0], opacity: [0, 1, 0] }}
      transition={{ duration: 10, repeat: Infinity, delay: 0.25 }}
      className="text-white text-[8px] absolute left-4 top-1"
    >
      <BsFillCloudyFill />
    </motion.span>
    <motion.span
      animate={{ x: [-5, 0, 5], opacity: [0, 1, 0] }}
      transition={{ duration: 20, repeat: Infinity, delay: 0.5 }}
      className="text-white text-xs absolute left-2 top-2"
    >
      <BsFillCloudyFill />
    </motion.span>
  </>
);