import { cn } from "../utils/cn";

export default function MaxWidthWrapper({ children, className }) {
  return (
    <div className={`mx-auto w-full max-w-screen-xl px-2.5 md:px-20 ${className || ""}`}>
      {children}
    </div>
  );
}
