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
        Dedicated full-stack developer with a unique blend of technical
        expertise and creative flair, driven by a passion for music. Seamlessly
        merging technology and artistry, I craft immersive and user-centric
        experiences. Proficient in full-stack development and storytelling, I
        thrive in dynamic environments, contributing technical skills to build
        robust applications. Eager to collaborate on projects challenging the
        status quo, pushing the boundaries of what technology can achieve. My
        core stack includes{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        , and I am also familiar with TypeScript and Prisma. I am always looking
        to learn new technologies and am currently seeking a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and listening to music. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
