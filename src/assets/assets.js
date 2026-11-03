import profile_img from "./profile_img.png";
import portfolio_img from "../assets/portfolio_img.png";
import eak_school from "../assets/eak_school.jpg";
import taletune_app from "../assets/taletune_app.png";
import PandaRunner from "./PandaRunner.png";
import amazonClone from "./amazon-clone.png";
import figure_formatter from "./figure_formatter.png";



import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';
import { FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
export const assets = {
  profile_img,
}


export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: 'Innovative',
    description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
    color: 'text-purple'
  },
  {
    icon: FaPaintBrush,
    title: 'Design Oriented',
    description: 'Beautiful design and user experience are at the heart of everything I create.',
    color: 'text-pink'
  },
  {
    icon: FaCode,
    title: 'Clean Code',
    description: 'I write maintainable, efficient code following best practices and modern patterns.',
    color: 'text-blue'
  }
];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'Vue.js', 'Angular', 'TypeScript']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', 'Django', 'Laravel']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']
  },
  {
    title: 'Mobile Development',
    icon: FaMobileAlt,
    description: 'Building cross-platform mobile applications with modern tools.',
    tags: ['React Native', 'Flutter', 'Ionic', 'Swift']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Webpack', 'Figma', 'Jest']
  }
];



export const projects = [
  {
    title: "EAK International School",
    description: "Modern, responsive K-12 school website built with React, Vite and Tailwind CSS (frontend assignment for Eak Pustak).",
    image: eak_school,
    tech: ["HTML5", "React", "TailwindCSS", "React Router", "Framer Motion"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    demo: "https://eak-international-school-ruby.vercel.app/",
    code: "https://github.com/Pooja7345/eak-international-school",
    status: "Live",
  },
  {
    title: "Panda Runner",

    description: "An interactive browser game where players control a panda, avoid obstacles, and try to achieve the highest score.",

    image: PandaRunner,

    tech: ["HTML", "CSS", "JavaScript",],

    icons: [FaHtml5, FaCss3Alt, FaJs],

    demo: "https://panda-runner-game-seven.vercel.app",

    code: "https://github.com/Pooja7345/Panda-runner-game",
    status: "Live",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: portfolio_img,
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "https://github.com/Pooja7345/my-portfolio",
    status: "Live",
    
  },
  {
    title: "Amazon Clone",
    description: "A responsive Amazon clone featuring a modern shopping interface with product browsing, categories, and an interactive user experience.",
    image: amazonClone,
    tech: ["HTML", "JavaScript", "CSS"],
    icons: [FaReact, FaJs, FaCss3Alt],
    demo: "#",
    code: "https://github.com/Pooja7345/Amazon-Clone",
    status: "clone project",
  },
  {
    title: "Taletune App",
    description: "TaleTune — Create stories together, bring characters to life with your voices, and share your own audiobooks with the world.",
    image: taletune_app,
    tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "https://github.com/Pooja7345/Taletune",
    status: "Under Development",
  },

  {
    title: "Figure Formatter",
    description:
      "A Python-based project for cleaning scientific figures and reconstructing missing image regions, developed with AI assistance as part of my learning journey.",
    image: figure_formatter,
    tech: ["Python", "Presentation handling", "NumPy"],
    icons: [FaDatabase],
    demo: "#",
    code: "https://github.com/Pooja7345/Figure-formatter",
    status: "Under Development",
  },



];