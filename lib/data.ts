import React from "react";
import {
  FaBookmark,
  FaBuilding,
  FaLeaf,
  FaRobot,
  FaServer,
} from "react-icons/fa";
import MeetopiaImg from "@/public/Meetopia.png";
import MirofyImg from "@/public/Mirofy.png";
import MyrtleImg from "@/public/Myrtle.png";
import SpotifyImg from "@/public/Spotify.png";
import LunaImg from "@/public/Luna.jpg";
import NextReadImg from "@/public/NextRead.jpg";
import GeoVisionImg from "@/public/Geo.jpg";
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
      "In 2023, I participated in the prestigious Smart India Hackathon as the team leader, focusing on a critical challenge in agricultural technology: plant and raw material identification. Our team developed an innovative AI model trained using comprehensive Kaggle datasets, enabling real-time plant and raw material recognition. By leveraging machine learning techniques, we created a solution that could instantly identify and classify various agricultural specimens with high accuracy. ",
    icon: React.createElement(FaLeaf),
    date: "2023",
  },
  {
    title: "Co-Lead in AI Unite Hackathon",
    location: "India",
    description:
      "In 2024, I co-led my team to victory in the AI Unite Hackathon at Techno India University, focusing on the transformative potential of smart education technology. Our innovative solution was a comprehensive AI-powered dashboard that revolutionized student productivity and learning management. We created an all-in-one platform that integrated multiple essential features—including a collaborative meeting space, interactive whiteboard, synchronized calendar, and intelligent task management system—eliminating the need for students to navigate between multiple disparate applications.Our AI-driven dashboard streamlined the educational experience by providing a unified environment where students could seamlessly track assignments, schedule meetings, collaborate in real-time, and manage their academic responsibilities. By consolidating these critical tools into a single, intuitive interface, we addressed the fragmentation that often challenges student workflow and productivity. ",
    icon: React.createElement(FaBookmark),
    date: "2024",
  },
  {
    title: "Co-Lead in Hack-Ai-Thon",
    location: "India",
    description:
      "In the Hack-Ai-Thon 2024 hosted by State Bank of India, I am co-leading a team focused on developing an innovative AI-driven fraud detection system for the insurance sector. Our project aims to leverage advanced machine learning techniques to identify and prevent fraudulent insurance claims, showcasing our ability to apply cutting-edge AI solutions to critical financial challenges. ",
    icon: React.createElement(FaServer),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "GeoVision Ai",
    description:
      "GeoVisionAI generates smooth, AI-interpolated videos from satellite WMS imagery, displayed on interactive web maps",
    tags: [
      "Python",
      "TensorFlow/PyTorch",
      "OpenLayers/Leaflet",
      "FFmpeg",
      "CUDA",
    ],
    imageUrl: GeoVisionImg,
  },

  {
    title: "NextRead",
    description:
      "NextRead: A Smart Book Recommendation Platform for Passionate Readers",
    tags: ["React", "Nodejs", "MongoDB", "AWS", "Git"],
    imageUrl: NextReadImg,
  },
  {
    title: "Luna",
    description:
      "Luna - Advanced image enhancement system for analyzing shadowed lunar crater regions captured by Chandrayaan-2.",
    tags: ["Image Processing", "Machine Learning", "Python", "CUDA", "Git"],
    imageUrl: LunaImg,
  },
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
  "Java",
  "Python",
  "C++",
  "JavaScript",
  "TypeScript",
  "SQL",
  "Node.js",
  "React",
  "Next.js",
  "MongoDB",
  "Redis",
  "PostgreSQL",
  "OOPS",
  "Data Structures",
  "Algorithms",
  "Git",
  "Docker",
  "AWS",
  "GCP",
  "VS Code",
  "SDLC",
  "Agile",
] as const;
