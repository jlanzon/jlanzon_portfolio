import { useRef } from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { Button } from "../components/ui/moving-border";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import "./Home.css";
import { Spotlight } from "@/components/ui/Spotlight";
import { Timeline } from "@/components/ui/timeline";

function Home() {
  const skillsRef = useRef<HTMLDivElement>(null);

  const scrollToNextSection = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const data = [
    {
      title: "Professional Summary",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            With over seven years of dedicated service as an ICT Technician in
            the Royal Air Force, Joseph has built expertise in information
            technology and software development. His journey began at Fareham
            College and advanced through a career in the Ministry of Defence.
            Currently, as a Lead Software Developer at RAF Coningsby’s Mission
            Support Centre, he creates bespoke web applications enhancing
            mission effectiveness. He also volunteers at a coding club, sharing
            software development skills.
          </p>
        </div>
      ),
    },
    {
      title: "IT Skills",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Proficient in Full-Stack Development with Python, Angular, React,
            Firebase, CMD, Git, PowerBI, HTML/CSS/JavaScript/TypeScript, UX/UI
            Design, Cybersecurity, AI (including LLMs), and Microsoft Azure
            DevSecOps.
          </p>
        </div>
      ),
    },
    {
      title: "Professional Experience",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Mission Support Centre (MSC) – Lead Software Developer, RAF
            Coningsby (Nov 2022–Present): Lead Web Developer managing a team,
            overseeing DevSecOps, and spearheading internal software and AI
            projects.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            BAE Systems Digital Intelligence – Software Developer (Secondment),
            Leeds (Jun 2023 – Oct 2023): Contributed to software application
            development and CI/CD efforts, supporting software release
            transitions.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Operational deployment – Information Management, 901 Expeditionary
            Air Wing - Qatar (Sep 2020 – Dec 2020): Managed user accounts and
            secure communication infrastructure.
          </p>
        </div>
      ),
    },
    {
      title: "Qualifications",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            FdSc Computer Science, Staffordshire University (Jan 2021 – Aug
            2024)
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            DevSecOps Foundation v2.1 (Feb 2024), APMG Agile (May 2023), PCEP –
            Certified Python Programmer (Apr 2023), Mental Health First Aid (May
            2021), Unified Communications Apprenticeship (Merit) (Mar 2018 – Dec
            2018), Level 3 IT Sub-Diploma (Pass) (Sep 2014 – May 2016)
          </p>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="">
        <Spotlight />
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
            words="Joseph Lanzon"
          />

          <p className="py-6">
            I am a full stack web developer & AI Development Lead
          </p>
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
      <div className="h-screen my-32">
        <Timeline data={data} />
      </div>

      <MaxWidthWrapper>
        <div className="" ref={skillsRef}>
          <MaxWidthWrapper className="my-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <p className="text-lg mb-8">
              Here are some of the projects I've worked on:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Email Redrafter Project */}
              <div className="bg-white dark:bg-slate-600 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-2">Email Redrafter</h3>
                <p className="text-lg mb-4">
                  A tool that uses AI to improve the clarity and tone of your
                  emails.
                </p>
                <a href="/redraft">
                  <Button
                    borderRadius="2.75rem"
                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 shadow-md backdrop-blur"
                  >
                    View Project
                  </Button>
                </a>
              </div>

              {/* GPX Display WebApp Project */}
              <div className="bg-white dark:bg-slate-600 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-2">GPX Display WebApp</h3>
                <p className="text-lg mb-4">
                  A web application to display and analyze GPX files for outdoor
                  activities.
                </p>
                <a
                  href="https://jlanzon.github.io/GPX-Display-WebApp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    borderRadius="2.75rem"
                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 shadow-md backdrop-blur"
                  >
                    View Project
                  </Button>
                </a>
              </div>

              <div className="bg-white dark:bg-slate-600 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-2">Project Three</h3>
                <p className="text-lg mb-4">
                  Description of the project. It includes ...
                </p>
                <Button
                  borderRadius="2.75rem"
                  disabled
                  className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 shadow-md backdrop-blur"
                >
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
