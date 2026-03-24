export interface Achievement {
  title: string
  event: string
  organizer: string
  year: string
  prize: string
  description: string
  tags: string[]
}

export interface Project {
  id: number
  title: string
  category: string
  description: string
  tags: string[]
  year: string
  featured?: boolean
  color: string
  link: string
}

export interface Skill {
  name: string
  level: number
  category: string
}

export interface Experience {
  company: string
  role: string
  period: string
  description: string
  current?: boolean
}

export interface NavItem {
  label: string
  href: string
}
