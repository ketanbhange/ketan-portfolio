import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  
} from "../assets";
import tripnest from "../assets/tripnest.png";
import ai from "../assets/ai.png";
import weather from "../assets/weather.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
{
  title: "Problem Solving & DSA",
  icon: mobile,
},
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
    {
    title: "Programming Foundation",
    company_name: "2021",
    icon: creator,
    iconBg: "#383E56",
    date: "Started Coding Journey",
    points: [
      "Started coding in 2021 with a focus on Java and logical problem solving.",
      "Built strong fundamentals in data structures and algorithmic thinking.",
      "Developed consistency through structured practice and daily problem solving.",
    ],
  },
  {
    title: "Competitive Programming Growth",
    company_name: "Coding Ninjas (Code360)",
    icon: web,
    iconBg: "#E6DEDD",
    date: "2022 - 2023",
    points: [
      "Solved 350+ problems across multiple difficulty levels.",
      "Ranked in Top 2% during 2023 annual recap.",
      "Invested 10,000+ minutes in structured DSA learning.",
    ],
    profile: "https://www.naukri.com/code360/profile/ece1c3b2-4bce-4029-85bf-ed221eb43601",
  },
 {
  title: "Full-Stack Development",
  company_name: "MERN Stack Implementation",
  icon: web,
  iconBg: "#383E56",
  date: "2025 - Present",
  points: [
    "Built and deployed full-stack web applications using React, Node.js, Express, and MongoDB.",
    "Designed REST APIs and structured MongoDB schemas for managing users and application data.",
    "Implemented authentication, protected routes, and modular frontend architecture.",
    "Handled real-world debugging, deployment, and performance improvements.",
  ],
  github: "https://github.com/ketanbhange",
},
];



const projects = [
    {
    name: "Tripnest",
    description:
      "Full-stack property listing and booking platform with authentication and protected workflows. Designed and implemented REST APIs, structured MongoDB schemas across multiple collections, and deployed the application for public access.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "express", color: "blue-text-gradient" },
    ],
     image: tripnest,
    source_code_link: "https://github.com/ketanbhange/TripNest",
    live_link: "https://wanderlust-2-ggwl.onrender.com/listing",
  },

  {
    name: "AI Resume Builder",
    description:
      "Dynamic resume generation platform with reusable component architecture and real-time preview functionality. Designed modular layouts supporting multiple themes and structured form state management.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
       { name: "strapi", color: "blue-text-gradient" },
      { name: "Hostinger", color: "green-text-gradient" },
    ],
     image:ai,
    source_code_link: "https://github.com/ketanbhange/ai-resume-builder-strapi-admin",
    live_link: "https://ai-resume-builder-frontend-eight.vercel.app/",
  },
 {
    name: "SkyCast",
    description:
      "API-driven weather application that fetches real-time forecast data and dynamically updates UI based on user input. Implemented asynchronous data handling with proper loading and error management.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
     image: weather,
    source_code_link: "https://github.com/ketanbhange/Weather",
    live_link: "https://your-live-link.com",
  },
];

export { services, technologies, experiences, projects };
