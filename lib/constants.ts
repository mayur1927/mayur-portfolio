export const SITE_CONFIG = {
  name: "Mayur Chaudhari",
  title: "Mayur Chaudhari — Computer Engineer",
  description:
    "Mayur Chaudhari — Computer Engineering student building full-stack, AI/NLP and Android applications.",
  location: "Pune, Maharashtra, India",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://mayur-portfolio-mauve.vercel.app",
};

export const SOCIAL_LINKS = {
  github: process.env.NEXT_PUBLIC_GITHUB_URL || "",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
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
  { href: "/#leetcode", label: "LEETCODE" },
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
    { name: "Python" }, { name: "Java" }, { name: "JavaScript", skillId: "javascript" },
    { name: "Kotlin", skillId: "kotlin" }, { name: "SQL" },
  ]},
  { category: "AI / ML", items: [
    { name: "Machine Learning", skillId: "ml" }, { name: "NLP", skillId: "nlp" },
    { name: "spaCy", skillId: "spacy" }, { name: "PyTorch" },
  ]},
  { category: "FRONTEND", items: [
    { name: "React.js", skillId: "react" }, { name: "JavaScript", skillId: "javascript" },
    { name: "HTML5" }, { name: "CSS3" }, { name: "Streamlit", skillId: "streamlit" },
    { name: "Responsive UI" },
  ]},
  { category: "BACKEND", items: [
    { name: "FastAPI", skillId: "fastapi" }, { name: "REST APIs", skillId: "rest-api" },
    { name: "JSON" }, { name: "API Integration" },
  ]},
  { category: "DATABASES", items: [
    { name: "PostgreSQL", skillId: "postgresql" }, { name: "MySQL" }, { name: "MongoDB" }, { name: "SQL" },
  ]},
  { category: "CLOUD", items: [
    { name: "AWS" }, { name: "EC2" }, { name: "VPC" }, { name: "Subnets" },
  ]},
  { category: "MOBILE", items: [
    { name: "Android", skillId: "kotlin" }, { name: "Jetpack Compose", skillId: "jetpack" },
  ]},
  { category: "TOOLS", items: [
    { name: "Git" }, { name: "GitHub" }, { name: "Postman" }, { name: "VS Code" }, { name: "Android Studio" },
  ]},
  { category: "CORE", items: [
    { name: "Data Structures & Algorithms" }, { name: "OOP" }, { name: "DBMS" },
    { name: "Operating Systems" }, { name: "Software Engineering" }, { name: "Problem Solving" },
  ]},
];
