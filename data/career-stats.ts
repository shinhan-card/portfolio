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
    proficiency: "intermediate",
    description: "Agile project management, sprint planning, backlog refinement",
  },
  {
    name: "Confluence",
    category: "Product Management",
    icon: "📝",
    proficiency: "intermediate",
    description: "Documentation, specs, stakeholder communication",
  },
  {
    name: "Figma",
    category: "Product Management",
    icon: "🎨",
    proficiency: "intermediate",
    description: "Design collaboration, prototyping, UX reviews",
  },
  {
    name: "Notion",
    category: "Product Management",
    icon: "📓",
    proficiency: "intermediate",
    description: "Product roadmaps, team wikis, knowledge base",
  },
  {
    name: "PowerPoint",
    category: "Product Management",
    icon: "📊",
    proficiency: "expert",
    description: "Executive presentations, stakeholder decks, proposals",
  },

  // Data & Analytics
  {
    name: "SQL",
    category: "Data & Analytics",
    icon: "🗄️",
    proficiency: "intermediate",
    description: "Data analysis, user behavior queries, metrics tracking",
  },
  {
    name: "Excel / Sheets",
    category: "Data & Analytics",
    icon: "📑",
    proficiency: "intermediate",
    description: "Data modeling, forecasting, business analysis",
  },

  // Collaboration & Communication
  {
    name: "Slack",
    category: "Collaboration",
    icon: "💬",
    proficiency: "intermediate",
  },
  {
    name: "MS Teams",
    category: "Collaboration",
    icon: "👥",
    proficiency: "advanced",
  },
  {
    name: "Zoom",
    category: "Collaboration",
    icon: "📹",
    proficiency: "expert",
  },

  // Technical Understanding
  {
    name: "Git / GitHub",
    category: "Technical",
    icon: "🐙",
    proficiency: "intermediate",
    description: "Version control understanding, engineering collaboration",
  },
  {
    name: "Cursor AI",
    category: "Technical",
    icon: "✨",
    proficiency: "intermediate",
    description: "AI-assisted coding, productivity enhancement",
  },
];
