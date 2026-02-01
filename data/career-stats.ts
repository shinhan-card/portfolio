import { Stat } from "@/components/ui/StatsCounter";
import { Tool } from "@/components/ui/TechStack";

export const careerStats: Stat[] = [
  {
    id: "years-experience",
    value: 9,
    suffix: "+",
    label: "Years Experience",
    description: "Product management in payments and fintech",
    icon: "📅",
    color: "accent",
  },
  {
    id: "projects-delivered",
    value: 6,
    suffix: "+",
    label: "Major Projects",
    description: "End-to-end product initiatives delivered",
    icon: "🚀",
    color: "green",
  },
  {
    id: "stakeholders",
    value: 50,
    suffix: "+",
    label: "Stakeholders",
    description: "Cross-functional collaboration across teams",
    icon: "🤝",
    color: "blue",
  },
  {
    id: "awards",
    value: 3,
    suffix: "+",
    label: "Awards",
    description: "Recognition for innovation and leadership",
    icon: "🏆",
    color: "orange",
  },
];

export const toolsAndTech: Tool[] = [
  // Product Management
  {
    name: "JIRA",
    category: "Product Management",
    icon: "📋",
    proficiency: "expert",
    years: 9,
    description: "Agile project management, sprint planning, backlog refinement",
  },
  {
    name: "Confluence",
    category: "Product Management",
    icon: "📝",
    proficiency: "expert",
    years: 9,
    description: "Documentation, specs, stakeholder communication",
  },
  {
    name: "Figma",
    category: "Product Management",
    icon: "🎨",
    proficiency: "advanced",
    years: 5,
    description: "Design collaboration, prototyping, UX reviews",
  },
  {
    name: "Notion",
    category: "Product Management",
    icon: "📓",
    proficiency: "advanced",
    years: 4,
    description: "Product roadmaps, team wikis, knowledge base",
  },

  // Data & Analytics
  {
    name: "SQL",
    category: "Data & Analytics",
    icon: "🗄️",
    proficiency: "advanced",
    years: 7,
    description: "Data analysis, user behavior queries, metrics tracking",
  },
  {
    name: "Tableau",
    category: "Data & Analytics",
    icon: "📊",
    proficiency: "intermediate",
    years: 5,
    description: "Dashboard creation, data visualization, reporting",
  },
  {
    name: "Google Analytics",
    category: "Data & Analytics",
    icon: "📈",
    proficiency: "advanced",
    years: 6,
    description: "User tracking, conversion funnel analysis",
  },
  {
    name: "Excel / Sheets",
    category: "Data & Analytics",
    icon: "📑",
    proficiency: "expert",
    years: 9,
    description: "Data modeling, forecasting, business analysis",
  },

  // Collaboration & Communication
  {
    name: "Slack",
    category: "Collaboration",
    icon: "💬",
    proficiency: "expert",
    years: 7,
  },
  {
    name: "MS Teams",
    category: "Collaboration",
    icon: "👥",
    proficiency: "advanced",
    years: 5,
  },
  {
    name: "Zoom",
    category: "Collaboration",
    icon: "📹",
    proficiency: "expert",
    years: 4,
  },
  {
    name: "Miro",
    category: "Collaboration",
    icon: "🖼️",
    proficiency: "advanced",
    years: 3,
    description: "Workshop facilitation, brainstorming, roadmapping",
  },

  // Technical Understanding
  {
    name: "REST APIs",
    category: "Technical",
    icon: "🔌",
    proficiency: "advanced",
    years: 7,
    description: "API design review, integration planning",
  },
  {
    name: "Git / GitHub",
    category: "Technical",
    icon: "🐙",
    proficiency: "intermediate",
    years: 5,
    description: "Version control understanding, engineering collaboration",
  },
  {
    name: "Postman",
    category: "Technical",
    icon: "🚀",
    proficiency: "intermediate",
    years: 5,
    description: "API testing, developer tool understanding",
  },
  {
    name: "Chrome DevTools",
    category: "Technical",
    icon: "🔍",
    proficiency: "advanced",
    years: 6,
    description: "Frontend debugging, UX issue investigation",
  },
];
