import "./App.css";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import { Button } from "./components/ui/moving-border";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import { BackgroundBeams } from "./components/ui/background-beams";

// cool trick
let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Come back 😢";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});

function App() {
  return (
    <>
      <div className="min-h-screen w-screen">
        <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
          <div>
            <h1 className="max-w-4xl text-4xl font-bold md:text-5xl lg:text-7xl">
              My name is
            </h1>
            <TextGenerateEffect
              className="text-blue-600 dark:text-blue-600 max-w-4xl text-4xl font-bold md:text-5xl lg:text-7xl sm:text-2xl"
              words="Joseph M Lanzon"
            />
            <p className="py-6">I am a lead full stack web developer</p>
            <Button
              borderRadius="2.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 shadow-md backdrop-blur"
            >
              Get in Contact
            </Button>
          </div>
        </MaxWidthWrapper>
      </div>
      <BackgroundBeams />
    </>
  );
}

export default App;
