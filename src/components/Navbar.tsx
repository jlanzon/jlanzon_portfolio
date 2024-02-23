import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <div className="navbar p-0 w-screen bg-base-100 sticky top-0 z-50">
      <div className="flex-1">
        <a className="text-xl hover:blur-[2px] ml-2">JLanzon // Portfolio</a>
      </div>
      <div className="flex-none">
        <DarkModeToggle />
      </div>
    </div>
  );
}
