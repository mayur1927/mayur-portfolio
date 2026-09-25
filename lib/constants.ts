export const SITE_CONFIG = {
  name: "Mayur Chaudhari",
  title: "Mayur Chaudhari — Computer Engineer",
  description:
    "Mayur Chaudhari — Computer Engineering student building full-stack, AI/NLP and Android applications.",
  location: "Pune, Maharashtra, India",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://mayur-portfolio-mauve.vercel.app",
};

export const SOCIAL_LINKS = {
  github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/mayur1927",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/mayur-chaudhari-160944305",
  email: process.env.NEXT_PUBLIC_EMAIL || "mayurchaudhari1927@gmail.com",
};

export const ROLES = [
  "FULL-STACK DEVELOPER",
  "AI / NLP BUILDER",
  "ANDROID DEVELOPER",
  "PROBLEM SOLVER",
];

export const NAV_LINKS = [
  { href: "/#work", label: "WORK" },
  { href: "/#toolkit", label: "STACK" },
  { href: "/#github", label: "GITHUB" },
  { href: "/#education", label: "EDUCATION" },
  { href: "/#about", label: "ABOUT" },
  { href: "/#contact", label: "CONTACT" },
];

export const EDUCATION = [
  {
    period: "JUL 2023 — PRESENT",
    title: "B.E. Computer Engineering",
    place: "Ajeenkya D. Y. Patil School of Engineering, Pune",
    score: "CGPA 8.67 / 10",
  },
  {
    period: "2022 — 2023",
    title: "HSC",
    place: "Kendriya Vidyalaya 9BRD No.3, Pune",
    score: "68.2%",
  },
  {
    period: "2020 — 2021",
    title: "SSC",
    place: "Kendriya Vidyalaya 9BRD No.3, Pune",
    score: "78.8%",
  },
];

export const TOOLKIT = [
  { category: "LANGUAGES", items: [
    { name: "Python", skillId: "python" },
    { name: "Java", skillId: "java" },
    { name: "JavaScript", skillId: "javascript" },
    { name: "Kotlin", skillId: "kotlin" },
    { name: "SQL", skillId: "sql" },
  ]},
  { category: "AI / ML", items: [
    { name: "Machine Learning", skillId: "ml" },
    { name: "NLP", skillId: "nlp" },
    { name: "spaCy", skillId: "spacy" },
    { name: "PyTorch", skillId: "pytorch" },
  ]},
  { category: "FRONTEND", items: [
    { name: "React.js", skillId: "react" },
    { name: "JavaScript", skillId: "javascript" },
    { name: "HTML5", skillId: "html" },
    { name: "CSS3", skillId: "css" },
    { name: "Streamlit", skillId: "streamlit" },
    { name: "Responsive UI", skillId: "responsive" },
  ]},
  { category: "BACKEND", items: [
    { name: "FastAPI", skillId: "fastapi" },
    { name: "REST APIs", skillId: "rest-api" },
    { name: "JSON", skillId: "json" },
    { name: "API Integration", skillId: "api" },
  ]},
  { category: "DATABASES", items: [
    { name: "PostgreSQL", skillId: "postgresql" },
    { name: "MySQL", skillId: "mysql" },
    { name: "MongoDB", skillId: "mongodb" },
    { name: "SQL", skillId: "sql" },
  ]},
  { category: "CLOUD", items: [
    { name: "AWS", skillId: "aws" },
    { name: "EC2", skillId: "ec2" },
    { name: "VPC", skillId: "vpc" },
    { name: "Subnets", skillId: "subnets" },
  ]},
  { category: "MOBILE", items: [
    { name: "Android", skillId: "android" },
    { name: "Jetpack Compose", skillId: "jetpack" },
  ]},
  { category: "TOOLS", items: [
    { name: "Git", skillId: "git" },
    { name: "GitHub", skillId: "github" },
    { name: "Postman", skillId: "postman" },
    { name: "VS Code", skillId: "vscode" },
    { name: "Android Studio", skillId: "android-studio" },
  ]},
  { category: "CORE", items: [
    { name: "Data Structures & Algorithms", skillId: "dsa" },
    { name: "OOP", skillId: "oop" },
    { name: "DBMS", skillId: "dbms" },
    { name: "Operating Systems", skillId: "os" },
    { name: "Software Engineering", skillId: "se" },
    { name: "Problem Solving", skillId: "problem-solving" },
  ]},
];
