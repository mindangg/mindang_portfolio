import type { Project, Skill, Experience, NavItem, Achievement } from './types'

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  // { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'HealthPro',
    category: 'FullStack',
    description:
      'Developed a full-stack Patient Management System with a microservices architecture, featuring secure authentication and an intuitive dashboard for managing patient records and healthcare workflows.',
    tags: ['Next.js', 'SpringBoot', 'PostgreSQL', 'TypeScript', 'Java'],
    year: '2025',
    featured: true,
    color: '#1a1a0f',
    link: 'https://github.com/qbael/HealthPro'
  },
  {
  id: 2,
    title: 'Manga E-Commerce Platform',
    category: 'FullStack',
    description:
      'Developed a Full-stack E-Commerce Web Application to sells manga with an admin dashboard for managing the website and JWT for authentication',
    tags: ['React.js', 'Express.js', 'Node.js', 'MongoDB', 'JavaScript'],
    year: '2025',
    featured: true,
    color: '#2a3a1a',
    link: 'https://github.com/mindangg/Manga-2.0'
  },
  {
    id: 3,
    title: 'AskRepo',
    category: 'RAG system',
    description:
      'A full-stack GitHub Repository RAG System with ia local AI architecture, featuring hybrid semantic search and an intelligent chat interface for querying any codebase with exact file and line citations.',
    tags: ['React', 'RAG', 'Python', 'FastAPI', 'Ollama LLM'],
    year: '2026',
    color: '#1a1a3a',
    link: 'https://github.com/mindangg/AskRepo'
  },
  {
    id: 4,
    title: 'HealthShark',
    category: 'Machine Learning',
    description:
      'Developed an AI Chatbot to treat emotional disorders with animated UI for better experience and store user responses for a more personalize experience',
    tags: ['MERN stack', 'Python', 'FastAPI'],
    year: '2023',
    color: '#3a1a2a',
    link: 'https://github.com/mindangg/Hackathon'
  },
]

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'React / Next.js', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 92, category: 'Frontend' },
  { name: 'React Native / Expo', level: 92, category: 'Frontend' },

  // Backend
  { name: 'Java / Spring Boot', level: 85, category: 'Backend' },
  { name: 'Node.js / Express', level: 85, category: 'Backend' },
  { name: 'PostgreSQL / Prisma', level: 80, category: 'Backend' },
  { name: 'Python / FastAPI', level: 80, category: 'Backend' },

  // Design
  { name: 'Docker', level: 72, category: 'FullStack' },
  { name: 'AWS', level: 100, category: 'FullStack' },
  { name: 'Github Actions', level: 100, category: 'FullStack' },
]

export const EXPERIENCES: Experience[] = [
  {
    company: 'Nexus Studio',
    role: 'Senior Creative Developer',
    period: '2023 — Present',
    description:
      'Leading frontend architecture and design system development for enterprise clients. Mentoring a team of 6 developers and collaborating closely with UX/product teams.',
    current: true,
  },
  {
    company: 'Forma Digital',
    role: 'Full-Stack Developer',
    period: '2021 — 2023',
    description:
      'Built scalable web applications from concept to production. Owned end-to-end delivery for 3 major product launches, each reaching 10k+ users within 30 days.',
  },
  {
    company: 'Pixel & Ink Agency',
    role: 'UI Developer & Designer',
    period: '2019 — 2021',
    description:
      'Bridging the gap between design and engineering — translating Figma mockups into pixel-perfect, accessible, performant interfaces for clients across 8 industries.',
  },
  {
    company: 'Freelance',
    role: 'Independent Developer',
    period: '2017 — 2019',
    description:
      'Designed and built websites, brand identities, and web apps for 30+ small businesses and startups across Southeast Asia.',
  },
]


export const ACHIEVEMENTS: Achievement[] = [
  {
    title: '3rd Place — Best AI Application',
    event: 'SGU Hackathon 2025',
    organizer: 'Sai Gon University',
    year: '2025',
    prize: '3rd Place',
    description:
      'Built HealthShark in 24 hours — an AI-powered mental health chatbot with animated UI and personalized session memory. Judged on innovation, technical depth, and real-world impact.',
    tags: ['AI', 'MERN Stack', 'FastAPI', '24h Sprint'],
  },
  {
    title: 'Top Finalist',
    event: 'SGU Hackathon 2026',
    organizer: 'Sai Gon University',
    year: '2026',
    prize: 'Top 7',
    description:
      'Presented TravelMate — an AI powered travel companion that helps create, schedule trips with interactive map and real time animated chatbot',
    tags: ['Next.js', 'Express.js', 'OpenAI', 'Open Source'],
  },
]
