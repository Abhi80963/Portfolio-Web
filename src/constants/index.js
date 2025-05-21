import {
  mobile,
  backend,
  Ai,
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
  Meta,
  Peasunet,
  resumely,
  meetup,
  Express,
} from "../assets";

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
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Gen AI & ML Models",
    icon: Ai,
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
    name: "Android",
    icon: mobile,
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
    title: "Student Trainee",
    company_name: "Metacrafters",
    icon: Meta,
    iconBg: "#E6DEDD",
    date: "May 2024 - Sep 2024",
    points: [
  "Explored and gained hands-on experience with Web3 and blockchain technologies including Ethereum and Polygon.",
  "Developed 4-5 decentralized applications (dApps) involving smart contracts on Ethereum using Solidity.",
  "Worked with blockchain development tools like Hardhat, Remix IDE, and MetaMask for deploying and testing smart contracts.",
  "Integrated smart contracts with frontend applications using Ethers.js and Web3.js.",
  "Built responsive and interactive user interfaces with React.js and ensured cross-browser compatibility.",
  "Connected dApps to blockchain networks via MetaMask and handled wallet interactions securely.",
  "Collaborated with cross-functional teams including designers, product managers, and developers to deliver production-ready Web3 solutions.",
],
  },
  {
    title: "Software Developer Intern",
    company_name: "Prasunet Pvt Ltd.",
    icon: Peasunet,
    iconBg: "383E56",
    date: "Oct 2024 - Present",
    points: [
  "Worked as a Full Stack Developer Intern, building and maintaining web applications using Next.js, React.js, and TypeScript.",
  "Developed 2-3 full-stack web projects with PostgreSQL as the backend database and Prisma ORM for database management.",
  "Designed and integrated RESTful APIs and server-side logic for seamless frontend-backend interaction.",
  "Utilized modern development tools and workflows including Git, GitHub, and Vercel for deployment and collaboration.",
  "Participated in code reviews, debugging sessions, and performance optimization to ensure high-quality code delivery.",
],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but he proved me wrong.",
    name: "Sara Lee",
    designation: "CEO",
    company: "Prasunet",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like he does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After he optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Resumely",
    description:
"Web-based platform that enables users to create, customize, and download professional resumes using AI-powered tools, offering a fast and intelligent solution for job seekers.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: resumely,
    source_code_link: "https://github.com/Abhi80963/Resumely",
  },
  {
    name: "MeetUP",
    description:
      "Web application platform built with Next.js that enables users to host and join high-quality video calls, providing a seamless and real-time communication experience for meetings, events, and collaboration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "getStream.io",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: meetup,
    source_code_link: "https://github.com/Abhi80963/MeetUP",
  },
  {
    name: "Express News App",
    description:
      "A simple news app built with Jetpack Compose that allows users to browse, search for news, and view detailed articles. It includes a login/signup authentication.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "jetpack compose",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: Express,
    source_code_link: "https://github.com/Abhi80963/Express",
  },
];

export { services, technologies, experiences, testimonials, projects };
