import DarkModeToggle from "./DarkModeToggle";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Navbar() {
  return (
    <div className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b dark:border-gray-900 border-gray-200 dark:bg-black/25 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between ">
          <a className="text-xl hover:blur-[2px] ml-2">JLanzon // Portfolio</a>
          <div className="items-center space-x-4 sm:flex">
            <DarkModeToggle />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
