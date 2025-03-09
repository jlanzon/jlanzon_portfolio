"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { Button } from "../components/ui/moving-border";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { Timeline } from "@/components/ui/timeline";
import "./Home.css";
import { DarkGridHero } from "@/components/Hero";

function Home() {
  const skillsRef = useRef<HTMLDivElement>(null);

  const scrollToNextSection = () => {
    skillsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const timelineData = [
    {
      title: "Professional Summary",
      content: (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8"
        >
          With over seven years of experience in software development, AI integration, and IT infrastructure, I transitioned from an ICT Technician in the Royal Air Force to Lead AI Developer at KryptoKloud. I lead cutting-edge AI projects, enhancing security and operational resilience through full-stack development and DevSecOps.
        </motion.p>
      ),
    },
    {
      title: "IT Skills",
      content: (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8"
        >
          Proficient in full-stack development (React, Node.js, Python), AI (LLMs), DevSecOps, cloud technologies (Azure, AWS), cybersecurity automation, Git, and modern frameworks.
        </motion.p>
      ),
    },
    {
      title: "Professional Experience",
      content: (
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4"
          >
            Lead AI Developer, KryptoKloud (Nov 2024–Present): Spearhead AI and web platform development with React, Node.js, and Python.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4"
          >
            Lead Software Developer, RAF Coningsby (Nov 2022–Nov 2024): Managed React team and DevSecOps for classified IT systems.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4"
          >
            Software Developer, BAE Systems (Jun 2023–Oct 2023): Enhanced CI/CD and software applications.
          </motion.p>
        </div>
      ),
    },
    {
      title: "Qualifications",
      content: (
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4"
          >
            FdSc Computer Science – Distinction, Staffordshire University (Jan 2021–Nov 2024)
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4"
          >
            DevSecOps Foundation v2.1 (Feb 2024), APMG Agile (May 2023), PCEP Python (Apr 2023)
          </motion.p>
        </div>
      ),
    },
  ];

  return (
    <>
      {/* <div className="relative h-[90vh] ">
        <Spotlight />
        <MaxWidthWrapper className="mb-12 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mx-auto flex max-w-fit items-center justify-center space-x-2 mb-10 mt-10 rounded-full border dark:border-gray-600 border-gray-200 bg-white dark:bg-slate-600 px-7 py-2 shadow-md backdrop-blur"
          >
            <p className="text-sm font-semibold dark:text-white text-gray-700">
              My portfolio is currently <span className="text-pink-600">UNDER CONSTRUCTION</span>
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl text-4xl font-bold md:text-5xl lg:text-7xl"
          >
            My name is
          </motion.h1>
          <TextGenerateEffect
            className="text-blue-600 dark:text-blue-600 max-w-4xl text-4xl font-bold md:text-5xl lg:text-7xl sm:text-2xl"
            words="Joseph Lanzon"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="py-6 text-lg"
          >
            I am a Full Stack Web Developer & AI Development Lead
          </motion.p>
          <motion.a
            href="mailto:joelanzon@outlook.com"
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              borderRadius="2.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 shadow-md backdrop-blur"
            >
              Get in Contact
            </Button>
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="scroll-indicator mt-10 flex flex-col items-center"
          >
            <p className="text-lg text-gray-700 dark:text-white">Scroll down to see more</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              onClick={scrollToNextSection}
              className="cursor-pointer"
            >
              <svg
                className="w-6 h-6 text-gray-700 dark:text-white mt-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </motion.div>
        </MaxWidthWrapper>
      </div> */}

      <DarkGridHero scrollToNextSection={scrollToNextSection}/>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="my-32"
      >
        <Timeline data={timelineData} />
      </motion.div>

      <MaxWidthWrapper>
        <div ref={skillsRef}>
          <MaxWidthWrapper className="my-12 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-4"
            >
              Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg mb-8"
            >
              Here are some of my key projects:
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-slate-600 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-bold mb-2">Email Redrafter</h3>
                <p className="text-lg mb-4">AI-powered tool to refine email clarity and tone.</p>
                <a href="/redraft">
                  <Button
                    borderRadius="2.75rem"
                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 shadow-md backdrop-blur"
                  >
                    View Project
                  </Button>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white dark:bg-slate-600 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-bold mb-2">GPX Display WebApp</h3>
                <p className="text-lg mb-4">Web app to visualise and analyse GPX files.</p>
                <a href="https://jlanzon.github.io/GPX-Display-WebApp/" target="_blank" rel="noopener noreferrer">
                  <Button
                    borderRadius="2.75rem"
                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 shadow-md backdrop-blur"
                  >
                    View Project
                  </Button>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-slate-600 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-bold mb-2">AI Enabled CSaaS Platform - Front End </h3>
                <p className="text-lg mb-4">Developed at KryptoKloud for threat analysis</p>
                <a href="https://cybershadows.co.uk/" target="_blank" rel="noopener noreferrer">
                <Button
                  borderRadius="2.75rem"
                  
                  className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 shadow-md backdrop-blur"
                >
                  View Project
                </Button>
                </a>
              </motion.div>
            </div>
          </MaxWidthWrapper>

          <MaxWidthWrapper className="my-12 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-4"
            >
              Experience
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg mb-8"
            >
              A snapshot of my professional journey:
            </motion.p>
            <div className="grid grid-cols-1 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-slate-600 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-bold mb-2">Lead AI Developer, KryptoKloud</h3>
                <p className="text-lg">Nov 2024 – Present</p>
                <p className="text-lg">Driving AI and full-stack development for cybersecurity solutions.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white dark:bg-slate-600 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-bold mb-2">Lead Software Developer, RAF Coningsby</h3>
                <p className="text-lg">Nov 2022 – Nov 2024</p>
                <p className="text-lg">Led React team and DevSecOps for mission-critical systems.</p>
              </motion.div>
            </div>
          </MaxWidthWrapper>

          <MaxWidthWrapper className="my-12 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-4"
            >
              Contact
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg mb-8"
            >
              Reach out via:
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center space-y-4"
            >
              <p className="text-lg">
                Email: <a href="mailto:joelanzon@outlook.com" className="text-blue-600">joelanzon@outlook.com</a>
              </p>
              <p className="text-lg">
                GitHub: <a href="https://github.com/jlanzon" className="text-blue-600">github.com/jlanzon</a>
              </p>
              <p className="text-lg">
                LinkedIn: <a href="https://www.linkedin.com/in/joseph-lanzon-541851138/" className="text-blue-600">LinkedIn Profile</a>
              </p>
            </motion.div>
          </MaxWidthWrapper>
        </div>
      </MaxWidthWrapper>
    </>
  );
}

export default Home;