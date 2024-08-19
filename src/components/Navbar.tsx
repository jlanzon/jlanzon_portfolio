import { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky h-14 inset-x-0 top-0 z-30 border-b dark:border-gray-900 border-gray-200 dark:bg-black/25 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          <Link to="/" className="text-xl hover:blur-[2px] ml-2">
            JLanzon // Portfolio
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/about" className="text-lg hover:blur-[1px]">
              About
            </Link>
            <span className="text-lg text-gray-400">Projects</span>
            <Link to="/Contact" className="text-lg hover:blur-[1px]">
              Contact
            </Link>{" "}
            <DarkModeToggle />
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
              {menuOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-800 dark:text-white" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-800 dark:text-white" />
              )}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden rounded-lg dark:bg-black/75 bg-white/75  flex flex-col items-center space-y-4 mt-2 transition-all backdrop-blur-lg">
            <Link to="/about" className="text-lg hover:blur-[1px]">
              About
            </Link>
            <span className="text-lg text-gray-400">Projects</span>
            <Link to="/Contact" className="text-lg hover:blur-[1px]">
              Contact
            </Link>

            <DarkModeToggle />
          </div>
        )}
      </MaxWidthWrapper>
    </div>
  );
}
