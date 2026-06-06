import type { Project, Skill, Experience, NavItem, Achievement } from './types'

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export const PROJECTS: Project[] = [
  {
    id: 5,
    title: 'Instory',
    category: 'FullStack',
    description:
      'Built real-time chat with SignalR, integrated AWS S3 for media upload, and deployed on AWS (EC2, RDS, S3, ECR) using GitHub Actions CI/CD & Docker.',
    tags: ['.NET 10', 'AWS', 'PostgreSQL', 'Docker', 'React'],
    year: '2026',
    color: '#1a2a2a',
    link: 'https://github.com/qbael/Instory'
  },
  {
    id: 1,
    title: 'HealthPro',
    category: 'FullStack',
    description:
      'Built a Patient Management System across 3 independent Spring Boot microservices, each with its own database, and an API gateway with centralized JWT authentication and RBAC.',
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
      'Built a GitHub Repository RAG System with local AI, hybrid semantic search, and intelligent chat for querying codebases with exact file and line citations.',
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
  // Languages
  { name: 'Java', level: 90, category: 'Languages' },
  { name: 'C#', level: 85, category: 'Languages' },
  { name: 'TypeScript', level: 90, category: 'Languages' },
  { name: 'Python', level: 80, category: 'Languages' },

  // Frameworks
  { name: 'Spring Boot', level: 90, category: 'Frameworks' },
  { name: '.NET', level: 85, category: 'Frameworks' },
  { name: 'Next.js', level: 95, category: 'Frameworks' },
  { name: 'Express.js', level: 85, category: 'Frameworks' },
  { name: 'FastAPI', level: 80, category: 'Frameworks' },

  // Cloud & DevOps
  { name: 'AWS', level: 100, category: 'Cloud & DevOps' },
  { name: 'Docker', level: 72, category: 'Cloud & DevOps' },
  { name: 'Git', level: 95, category: 'Cloud & DevOps' },
  { name: 'GitHub Actions', level: 100, category: 'Cloud & DevOps' },

  // Databases
  { name: 'PostgreSQL', level: 80, category: 'Databases' },
  { name: 'MySQL', level: 75, category: 'Databases' },
  { name: 'MongoDB', level: 75, category: 'Databases' },
]

export const EXPERIENCES: Experience[] = [
  {
    company: 'Glowmax',
    role: 'Co-Founder | CTO (Pre-launch)',
    period: 'May 2026 — Present',
    current: true,
    link: 'https://glowmaxx-three.vercel.app',
    highlights: [
      'Co-founded Glowmax as CTO, owning technical strategy, product architecture, and execution from concept to launch.',
      'Delivered core platform features - AI-powered facial analysis, premium user flows, leaderboard, and engagement systems to drive retention.',
      'Built and operated production infrastructure on AWS with automated CI/CD, supporting secure media workflows, reliable deployment, and fast iteration.',
    ],
  },
  {
    company: 'EVNHCMC IT',
    role: 'Backend Developer',
    period: 'June 2026 — Sep 2026',
    incoming: true,
    highlights: [
      'Incoming Backend Developer Intern, leveraging Java and Spring Boot to develop and maintain backend services.',
    ],
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
