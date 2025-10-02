"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
     <p className="mb-3">
  After completing my degree in{" "}
  <span className="font-medium">Information Technology</span> from{" "}
  <span className="font-medium">PUCIT</span>, I discovered my passion for
  building interactive, user-friendly web experiences. Over the past{" "}
  <span className="font-medium">2 years</span>, I have been working as a{" "}
  <span className="font-medium">Frontend Developer</span>, specializing in{" "}
  <span className="font-medium">React.js</span> and{" "}
  <span className="font-medium">Next.js</span>.
  <span className="italic"> My favorite part of development </span> is
  transforming design ideas into responsive and accessible web interfaces that
  deliver real value to users. I <span className="underline">enjoy</span> solving
  complex UI challenges, optimizing performance, and collaborating with teams to
  create seamless digital products.
  <br />
  <br />
  My core stack includes{" "}
  <span className="font-medium">
    React.js, Next.js, Tailwind CSS, Redux, and RESTful APIs
  </span>
  . I have hands-on experience working with{" "}
  <span className="font-medium">AI-driven projects</span>, such as building
  chatbot systems and automating workflows, which helped enhance efficiency and
  user engagement.
  <br />
  <br />
  I am passionate about writing clean, maintainable code and continuously
  learning new technologies. I am currently seeking a{" "}
  <span className="font-medium">Frontend Developer role</span> where I can
  contribute to meaningful projects, grow as a developer, and collaborate with
  a team that values innovation and creativity.
</p>

      
    </motion.section>
  );
}
