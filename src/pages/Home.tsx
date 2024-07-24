import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { Button } from "../components/ui/moving-border";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

function Home() {
  return (
    <>
      <div className=" w-full">
        <MaxWidthWrapper className="mb-12 mt-18 sm:mt-20 flex flex-col items-center justify-center text-center">
          <div className="mx-auto flex max-w-fit items-center justify-center space-x-2 mb-10 mt-10 overflow-hidden rounded-full border dark:border-gray-600 border-gray-200 bg-white dark:bg-slate-600 px-7 py-2 shadow-md backdrop-blur transition-all  hover:border-gray-300 hover:bg-white/50">
            <p className="text-sm font-semibold dark:text-white text-gray-700">
              My portfolio is currently{" "}
              <span className="text-pink-600">UNDER CONTRUCTION</span>
            </p>
          </div>
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
    </>
  );
}

export default Home;
