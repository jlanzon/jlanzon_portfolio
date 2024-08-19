import { useRef } from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { Button } from "../components/ui/moving-border";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import "./Home.css";

function Home() {
  const skillsRef = useRef<HTMLDivElement>(null);

  const scrollToNextSection = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="">
        <MaxWidthWrapper className="mb-12 flex flex-col items-center justify-center text-center ">
          <div className="mx-auto flex max-w-fit items-center justify-center space-x-2 mb-10 mt-10 overflow-hidden rounded-full border dark:border-gray-600 border-gray-200 bg-white dark:bg-slate-600 px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
            <p className="text-sm font-semibold dark:text-white text-gray-700">
              My portfolio is currently{" "}
              <span className="text-pink-600">UNDER CONSTRUCTION</span>
            </p>
          </div>

          <h1 className="max-w-4xl text-4xl font-bold md:text-5xl lg:text-7xl ">
            My name is
          </h1>
          <TextGenerateEffect
            className="text-blue-600 dark:text-blue-600 max-w-4xl text-4xl font-bold md:text-5xl lg:text-7xl sm:text-2xl "
            words="Joseph M Lanzon"
          />
          <p className="py-6">I am a lead full stack web developer</p>
          <a href="mailto:joelanzon@outlook.com">
            <Button
              borderRadius="2.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 shadow-md backdrop-blur"
            >
              Get in Contact
            </Button>
          </a>

          <div className="scroll-indicator mt-10 extendBOT flex flex-col align-middle">
            <p className="text-lg text-gray-700 dark:text-white">
              Scroll down to see more
            </p>
            <div className="flex justify-center" onClick={scrollToNextSection}>
              <svg
                className="w-6 h-6 ml-full mr-full text-gray-700 dark:text-white animate-bounce mt-2 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper>
        <div className="mt-32" ref={skillsRef}>
          &zwnj;
          {/* cheaky invis hack  */}
          <MaxWidthWrapper className=" text-center">
            <h2 className="text-3xl font-bold mb-4 mt-32">Skills</h2>
            <p className="text-lg mb-8">
              Here are some of the technologies I excel in:
            </p>
            <ul className="flex flex-wrap justify-center space-x-4">
              <li className="text-lg font-semibold text-blue-600">AI</li>
              <li className="text-lg font-semibold text-blue-600">LLaMa</li>
              <li className="text-lg font-semibold text-blue-600">
                JavaScript
              </li>
              <li className="text-lg font-semibold text-blue-600">React</li>
              <li className="text-lg font-semibold text-blue-600">Node.js</li>
              <li className="text-lg font-semibold text-blue-600">Python</li>
              <li className="text-lg font-semibold text-blue-600">
                TypeScript
              </li>
              <li className="text-lg font-semibold text-blue-600">Firebase</li>
              <li className="text-lg font-semibold text-blue-600">Azure</li>
            </ul>
          </MaxWidthWrapper>
          <MaxWidthWrapper className="my-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <p className="text-lg mb-8">
              This projects sections is currently under development:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 blur-lg">
              <div className="bg-white dark:bg-slate-600 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-2">Project One</h3>
                <p className="text-lg">
                  Description of the project. It includes ...
                </p>
                <Button disabled className="mt-4">
                  View Project
                </Button>
              </div>
              <div className="bg-white dark:bg-slate-600 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-2">Project Two</h3>
                <p className="text-lg">
                  OI - you should not be seeing any of this
                </p>
                <Button disabled className="mt-4">
                  View Project
                </Button>
              </div>
              <div className="bg-white dark:bg-slate-600 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-2">Project Three</h3>
                <p className="text-lg">
                  Description of the project. It includes ...
                </p>
                <Button disabled className="mt-4">
                  View Project
                </Button>
              </div>
            </div>
          </MaxWidthWrapper>
          <MaxWidthWrapper className="my-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Experience</h2>
            <p className="text-lg mb-8">
              A brief overview of my professional experience:
            </p>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white dark:bg-slate-600 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-2">
                  Lead Software Developer at RAF Coningsby
                </h3>
                <p className="text-lg">Nov 2022 – Present</p>
                <p className="text-lg">
                  Creating bespoke web applications that enhance mission
                  effectiveness ...
                </p>
              </div>
              <div className="bg-white dark:bg-slate-600 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-2">
                  Software Developer at BAE Systems Digital Intelligence
                </h3>
                <p className="text-lg">June 2023 – October 2023</p>
                <p className="text-lg">
                  Contributed to design, development, and implementation of
                  software applications ...
                </p>
              </div>
            </div>
          </MaxWidthWrapper>
          <MaxWidthWrapper className="my-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-lg mb-8">
              Feel free to reach out to me through the following channels:
            </p>
            <div className="flex flex-col items-center space-y-4">
              <p className="text-lg">
                Email:{" "}
                <a
                  href="mailto:joelanzon@outlook.com"
                  className="text-blue-600"
                >
                  joelanzon@outlook.com
                </a>
              </p>
              <p className="text-lg">
                GitHub:{" "}
                <a href="https://github.com/jlanzon" className="text-blue-600">
                  github.com/jlanzon
                </a>
              </p>
              <p className="text-lg">
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/joseph-lanzon-541851138/"
                  className="text-blue-600"
                >
                  LinkedIn Profile
                </a>
              </p>
            </div>
          </MaxWidthWrapper>
        </div>
      </MaxWidthWrapper>
    </>
  );
}

export default Home;
