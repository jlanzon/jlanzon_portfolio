import React from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { Button } from "../components/ui/moving-border";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

function About() {
  return (
    <>
      <div className="w-full">
        <MaxWidthWrapper className="mb-12 mt-18 sm:mt-20 flex flex-col items-center justify-center text-center">
          <div className="mx-auto flex max-w-fit items-center justify-center space-x-2 mb-10 mt-10 overflow-hidden rounded-full border dark:border-gray-600 border-gray-200 bg-white dark:bg-slate-600 px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
            <p className="text-sm font-semibold dark:text-white text-gray-700">
              About Me
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="max-w-4xl text-4xl font-bold md:text-5xl lg:text-7xl">
              Hi, I am
            </h1>
            <TextGenerateEffect
              className="text-blue-600 dark:text-blue-600 max-w-4xl text-4xl font-bold md:text-5xl lg:text-7xl sm:text-2xl"
              words="Joseph Michael Lanzon"
            />
            <p className="py-6">
              With over seven years of dedicated service as an ICT Technician in
              the Royal Air Force, I have cultivated profound expertise in
              information technology and software development. My academic
              journey in Information Technology began at Fareham College,
              setting the stage for a robust career in the Ministry of Defence.
              Currently positioned as a Lead Software Developer at RAF
              Coningsby’s Mission Support Centre, I excel in creating bespoke
              web applications that enhance mission effectiveness and
              operational support.
            </p>
            <p className="py-6">
              I am highly proficient in Full-Stack Development with specialized
              skills in Python, Angular, React, and Firebase, bolstered by
              command line and version control proficiency using CMD and Git. My
              technical expertise extends to PowerBI,
              HTML/CSS/JavaScript/TypeScript, UX/UI Design, Cybersecurity,
              Artificial Intelligence (including Large Language Models), and
              Microsoft Azure DevSecOps, equipping me with a diverse and modern
              IT skill set.
            </p>
            <p className="py-6">
              Besides coding, I enjoy engaging in outdoor activities like hiking
              and running. I also enjoy listening to podcasts and audiobooks,
              undertaking DIY projects, playing games with friends, and
              cherishing time spent with my daughter.
            </p>
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

export default About;
