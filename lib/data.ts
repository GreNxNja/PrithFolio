import React from "react";
import { FaBuilding, FaRobot } from "react-icons/fa";
import MeetopiaImg from "@/public/Meetopia.png";
import MirofyImg from "@/public/Mirofy.png";
import MyrtleImg from "@/public/Myrtle.png";
import SpotifyImg from "@/public/Spotify.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Team Leader in SIH - Smart India Hackathon",
    location: "India",
    description:
      "In 2023, I participated in the prestigious Smart India Hackathon as the team leader. Under my leadership, our team tackled a complex problem statement, developing an innovative solution that advanced us to the semi-finals. This experience honed my skills in project management, team collaboration, and creative problem-solving.",
    icon: React.createElement(FaBuilding),
    date: "2023",
  },
  {
    title: "Co-Leading in AI Unite Hackathon",
    location: "India",
    description:
      "I recently co-led my team of two to victory in the AI Unite Hackathon 2024, organized by Techno India University on the topic of education. Collaborating closely with my teammate, we developed innovative AI-driven solutions to tackle complex challenges in the education sector. This experience significantly enhanced my leadership, teamwork, and problem-solving skills while allowing me to contribute to cutting-edge projects.",
    icon: React.createElement(FaRobot),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Meetopia",
    description:
      "Meetopia is a professional video conferencing app for enterprises.",
    tags: ["React", "Next.js", "Stream", "Tailwind", "Clerk"],
    imageUrl: MeetopiaImg,
  },
  {
    title: "Mirofy",
    description:
      "Mirofy is a real-time collaborative whiteboard app for seamless teamwork and idea visualization.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Clerk",
      "Convex",
      "LiveBlocks",
    ],
    imageUrl: MirofyImg,
  },
  {
    title: "Bragr",
    description:
      "Experience seamless music streaming through a meticulously crafted full-stack web app",
    tags: ["React", "Next.js", "Supabase", "Tailwind"],
    imageUrl: SpotifyImg,
  },
  {
    title: "Myrtle",
    description:
      "Myrtle,an advanced online platform by team QuantumFrost for SIH, facilitates accurate identification of medicinal plants and raw materials.",
    tags: ["HTML-5", "CSS-3", , "Express", "Supabase", "Blockchain"],
    imageUrl: MyrtleImg,
  },
] as const;

export const skillsData = [
  "HTML5",
  "CSS3",
  "JavaScript (Node.js)",
  "TypeScript",
  "React",
  "Next.js",
  "Git & GitHub",
  "Tailwind CSS",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "Python",
  "Figma",
  "Framer Motion",
] as const;
