"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { Button } from "../components/ui/moving-border";
import { Timeline } from "@/components/ui/timeline";
import "./Home.css";

export default function Home() {
  const skillsRef = useRef(null);
  const profileRef = useRef(null);
  const profileGlossRef = useRef(null);
  const devCardRef = useRef(null);
  const devCardGlossRef = useRef(null);

  const scrollToNextSection = () => {
    skillsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMouseMove = (cardRef, glossRef) => (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (y / rect.height) * -20;
    const rotateY = (x / rect.width) * 20;

    const transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateZ(20px)
    `;
    cardRef.current.style.transform = transform;
    glossRef.current.style.transform = transform;

    const shineX = 50 + (rotateY / 20) * 30;
    const shineY = 50 + (rotateX / 20) * 30;
    glossRef.current.style.backgroundPosition = `${shineX}% ${shineY}%`;

    const maskX = ((e.clientX - rect.left) / rect.width) * 100;
    const maskY = ((e.clientY - rect.top) / rect.height) * 100;
    glossRef.current.style.maskImage = `radial-gradient(circle 50px at ${maskX}% ${maskY}%, black 0%, rgba(0,0,0,0.5) 35px, transparent 50px)`;
    glossRef.current.style.WebkitMaskImage = `radial-gradient(circle 50px at ${maskX}% ${maskY}%, black 0%, rgba(0,0,0,0.5) 35px, transparent 50px)`;
  };

  const handleMouseLeave = (cardRef, glossRef) => () => {
    const resetTransform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateZ(0px)
    `;
    cardRef.current.style.transform = resetTransform;
    glossRef.current.style.transform = resetTransform;
    glossRef.current.style.backgroundPosition = "center";
    glossRef.current.style.maskImage = `radial-gradient(circle 50px at 50% 50%, black 0%, rgba(0,0,0,0.5) 35px, transparent 50px)`;
    glossRef.current.style.WebkitMaskImage = `radial-gradient(circle 50px at 50% 50%, black 0%, rgba(0,0,0,0.5) 35px, transparent 50px)`;
  };

  const COLORS = [
  "violet-600",
  "indigo-600",
  "red-600",
  "green-600",
  "blue-600",
  "yellow-600",
  "pink-600",
  "purple-600",
  "orange-600",
  "teal-600",
];

  const timelineData = [
    {
      title: "Professional Summary",
      content: (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gray-700 dark:text-gray-200 text-xs md:text-sm font-normal mb-8"
        >
          Over seven years of experience in software development, AI integration, and IT infrastructure. Transitioned from ICT Technician in the Royal Air Force to Lead AI Developer at KryptoKloud, leading AI projects for security and operational resilience.
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
          className="text-gray-700 dark:text-gray-200 text-xs md:text-sm font-normal mb-8"
        >
          Proficient in full-stack development (React, Node.js, Python), AI (LLMs), DevSecOps, cloud technologies (Azure, AWS), cybersecurity automation, and Git.
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
            className="text-gray-700 dark:text-gray-200 text-xs md:text-sm font-normal mb-4"
          >
            Lead AI Developer, KryptoKloud (Nov 2024–Present): Spearhead AI and web platform development.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-700 dark:text-gray-200 text-xs md:text-sm font-normal mb-4"
          >
            Lead Software Developer, RAF Coningsby (Nov 2022–Nov 2024): Managed React team and DevSecOps.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-700 dark:text-gray-200 text-xs md:text-sm font-normal mb-4"
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
            className="text-gray-700 dark:text-gray-200 text-xs md:text-sm font-normal mb-4"
          >
            FdSc Computer Science – Distinction, Staffordshire University (Jan 2021–Nov 2024)
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-700 dark:text-gray-200 text-xs md:text-sm font-normal mb-4"
          >
            DevSecOps Foundation v2.1 (Feb 2024), APMG Agile (May 2023), PCEP Python (Apr 2023)
          </motion.p>
        </div>
      ),
    },
  ];

  return (
    <>
      <section
        id="hero"
        className="relative bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-gray-900 dark:text-white py-20 overflow-hidden"
      >
        
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500/10 dark:via-white/10 to-transparent transform -skew-y-6"></div>
        
        <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
          <motion.div
            className="md:w-1/2 text-center md:text-left bg-white/30 dark:bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-2xl border border-gray-300/20 dark:border-white/20"
            initial={{ opacity: 0, y: 50, rotateX: -10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformPerspective: 1000 }}
          >
            <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">Joseph Lanzon</h1>
            
            <p className="text-xl mb-8 drop-shadow-md">Software Developer | AI Specialist</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#projects"
                className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-600/50 dark:hover:shadow-blue-500/50 transform hover:-translate-y-1"
              >
                View My Projects
              </a>
              <a
                href="#contact"
                className="bg-gray-500 dark:bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-600 dark:hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-gray-500/50 dark:hover:shadow-gray-700/50 transform hover:-translate-y-1"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
          <div className="">
            
          <span className="absolute top-[80vh] left-[70%] z-0 h-[100] lg:h-[500px] w-[100px] lg:w-[600px]  -translate-x-[50%] rounded-full bg-gradient-to-r from-violet-600/20 to-indigo-600/20 blur-3xl" />
          <span className="absolute top-[10vh] left-[0%] z-0 h-[100] lg:h-[500px] w-[100px] lg:w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-r from-red-600/20 to-green-600/20 blur-3xl" />
          <span className="absolute top-[20vh] left-[80%] z-0 h-[100] lg:h-[500px] w-[100px] lg:w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-r from-violet-600/20 to-indigo-600/20 blur-3xl" />
          <span className="absolute top-[0vh] left-[100%] z-0 h-[100] lg:h-[500px] w-[100px] lg:w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-r from-violet-600/20 to-indigo-600/20 blur-3xl" />
          <span className="absolute top-[150vh]  left-[10%] z-0 h-[100] lg:h-[500px] w-[100px] lg:w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-r from-blue-600/20 to-indigo-600/20 blur-3xl" />
        </div>
          <motion.div
            className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ transformPerspective: 1000 }}
          >
            <div
              className="relative w-64 h-64 group"
              onMouseMove={handleMouseMove(profileRef, profileGlossRef)}
              onMouseLeave={handleMouseLeave(profileRef, profileGlossRef)}
            >
              <img
                ref={profileRef}
                src="./ProfilePic.jpg"
                alt="Joseph Lanzon"
                className="rounded-full w-64 h-64 object-cover border-4 border-gray-300/30 dark:border-white/30 shadow-2xl transition-transform duration-150"
                style={{ transformStyle: "preserve-3d" }}
              />
              <div
                ref={profileGlossRef}
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                  backgroundImage: `
                    radial-gradient(circle 5px at 50% 50%, rgba(255,255,255,0.7), transparent 4px),
                    url('./overlay.jpg')
                  `,
                  backgroundSize: "cover, cover",
                  backgroundPosition: "center, center",
                  backgroundBlendMode: "overlay",
                  transformStyle: "preserve-3d",
                  maskImage: `radial-gradient(circle 50px at 50% 50%, black 0%, rgba(0,0,0,0.5) 35px, transparent 50px)`,
                  WebkitMaskImage: `radial-gradient(circle 50px at 50% 50%, black 0%, rgba(0,0,0,0.5) 35px, transparent 50px)`,
                }}
              ></div>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="">
          <span className="absolute top-[150vh] left-[20%] z-0 h-[100] lg:h-[500px] w-[100px] lg:w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-r from-red-600/20 to-green-600/20 blur-3xl" />
          <span className="absolute top-[200vh] left-[50%] z-0 h-[100] lg:h-[500px] w-[100px] lg:w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-r from-violet-600/20 to-indigo-600/20 blur-3xl" />
          <span className="absolute top-[230vh] left-[70%] z-0 h-[100] lg:h-[500px] w-[100px] lg:w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-r from-violet-600/20 to-indigo-600/20 blur-3xl" />
          <span className="absolute top-[210vh] left-[10%] z-0 h-[100] lg:h-[500px] w-[100px] lg:w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-r from-blue-600/20 to-indigo-600/20 blur-3xl" />
        </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="my-32 bg-gray-50 dark:bg-gray-900"
      >
        <Timeline data={timelineData} />
      </motion.div>
      <MaxWidthWrapper>
        <div ref={skillsRef}>
          <MaxWidthWrapper id="projects" className="my-12 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg mb-8 text-gray-700 dark:text-gray-200"
            >
              Key projects showcasing my work:
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Email Redrafter</h3>
                <p className="text-lg mb-4 text-gray-700 dark:text-gray-200">AI-powered tool to refine email clarity and tone.</p>
                <a href="/redraft">
                  <Button
                    borderRadius="2.75rem"
                    className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 shadow-md backdrop-blur"
                  >
                    View Project
                  </Button>
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">GPX Display WebApp</h3>
                <p className="text-lg mb-4 text-gray-700 dark:text-gray-200">Web app to visualize and analyze GPX files.</p>
                <a href="https://jlanzon.github.io/GPX-Display-WebApp/" target="_blank" rel="noopener noreferrer">
                  <Button
                    borderRadius="2.75rem"
                    className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 shadow-md backdrop-blur"
                  >
                    View Project
                  </Button>
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">AI-Enabled CSaaS Platform</h3>
                <p className="text-lg mb-4 text-gray-700 dark:text-gray-200">Front-end for KryptoKloud's threat analysis platform.</p>
                <a href="https://cybershadows.co.uk/" target="_blank" rel="noopener noreferrer">
                  <Button
                    borderRadius="2.75rem"
                    className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 shadow-md backdrop-blur"
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
              className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              Experience
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg mb-8 text-gray-700 dark:text-gray-200"
            >
              My professional journey:
            </motion.p>
            <div className="grid grid-cols-1 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Lead Software Developer - KryptoKloud</h3>
                <p className="text-lg text-gray-700 dark:text-gray-200">Nov 2024 – Present</p>
                <p className="text-lg text-gray-700 dark:text-gray-200">Driving AI and full-stack development for cybersecurity solutions.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Lead Software Developer - RAF Coningsby</h3>
                <p className="text-lg text-gray-700 dark:text-gray-200">Nov 2022 – Nov 2024</p>
                <p className="text-lg text-gray-700 dark:text-gray-200">Led React team and DevSecOps for mission-critical systems.</p>
              </motion.div>
            </div>
          </MaxWidthWrapper>
          <MaxWidthWrapper className="my-12 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://app.daily.dev/jlanzon"
                className="relative inline-block group"
                onMouseMove={handleMouseMove(devCardRef, devCardGlossRef)}
                onMouseLeave={handleMouseLeave(devCardRef, devCardGlossRef)}
              >
                <img
                  ref={devCardRef}
                  src="https://api.daily.dev/devcards/v2/u6A365yCF613R7KCCgZrk.png?type=default&r=obw"
                  width="356"
                  alt="Joseph Lanzon's Dev Card"
                  className="rounded-lg shadow-2xl transition-transform duration-150"
                  style={{ transformStyle: "preserve-3d" }}
                />
                <div
                  ref={devCardGlossRef}
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{
                    backgroundImage: `
                      radial-gradient(circle 5px at 50% 50%, rgba(255,255,255,0.7), transparent 4px),
                      url('./overlay.jpg')
                    `,
                    backgroundSize: "cover, cover",
                    backgroundPosition: "center, center",
                    backgroundBlendMode: "overlay",
                    transformStyle: "preserve-3d",
                    maskImage: `radial-gradient(circle 50px at 50% 50%, black 0%, rgba(0,0,0,0.5) 35px, transparent 50px)`,
                    WebkitMaskImage: `radial-gradient(circle 50px at 50% 50%, black 0%, rgba(0,0,0,0.5) 35px, transparent 50px)`,
                  }}
                ></div>
              </a>
            </motion.div>
          </MaxWidthWrapper>
          <MaxWidthWrapper id="contact" className="my-12 text-center relative">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              Contact
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg mb-8 text-gray-700 dark:text-gray-200"
            >
              Get in touch:
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center space-y-4"
            >
              <p className="text-lg text-gray-700 dark:text-gray-200">
                Email: <a href="mailto:joelanzon@outlook.com" className="text-blue-600 dark:text-blue-400 hover:underline">joelanzon@outlook.com</a>
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-200">
                GitHub: <a href="https://github.com/jlanzon" className="text-blue-600 dark:text-blue-400 hover:underline">github.com/jlanzon</a>
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-200">
                LinkedIn: <a href="https://www.linkedin.com/in/joseph-lanzon-541851138/" className="text-blue-600 dark:text-blue-400 hover:underline">LinkedIn Profile</a>
              </p>
            </motion.div>
           
          </MaxWidthWrapper>
           
        </div>
      </MaxWidthWrapper>
    </>
  );
}