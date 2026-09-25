export interface ProjectData {
  slug: string;
  index: string;
  title: string;
  category: string;
  technologies: string[];
  skillIds: string[]; // ties into TOOLKIT hover-highlighting
  description: string;
  problem: string;
  solution: string;
  architecture: string;
  githubUrl?: string; // left empty on purpose — fill in with the real repo URL
  liveUrl?: string; // only set this if a live deployment actually exists
}

export const PROJECTS: ProjectData[] = [
  {
    slug: "skylens",
    index: "01 / 03",
    title: "SkyLens",
    category: "ANDROID · WEATHER · API",
    technologies: ["Kotlin", "Jetpack Compose", "REST API"],
    skillIds: ["kotlin", "jetpack", "rest-api", "android", "java", "api"],
    description:
      "An Android weather application that retrieves and displays real-time weather information using a REST-based weather API, with a responsive Jetpack Compose UI and asynchronous data handling for forecasts and location-based conditions.",
    problem:
      "Mobile weather apps are often heavy and cluttered. The goal was a fast, clean Android app focused on the essentials: current conditions, forecasts and location-aware data.",
    solution:
      "A native Android app built with Jetpack Compose, pulling live data from a REST weather API with asynchronous fetch/parse handling so the UI never blocks while data loads.",
    architecture: "Weather API  →  Async Fetch  →  Data Model  →  Compose UI",
    githubUrl: "",
    liveUrl: "",
  },
  {
    slug: "atelier",
    index: "02 / 03",
    title: "Atelier",
    category: "FULL-STACK · E-COMMERCE",
    technologies: ["React.js", "JavaScript", "Python", "FastAPI", "PostgreSQL"],
    skillIds: ["react", "javascript", "python", "fastapi", "postgresql", "sql", "rest-api", "api"],
    description:
      "Full-stack e-commerce application with product browsing, user authentication, cart management and order-related workflows. REST APIs built with FastAPI, PostgreSQL for data, and a responsive React.js frontend connected end-to-end.",
    problem:
      "Build a complete commerce workflow end to end — not just a storefront, but the auth, cart and ordering logic behind it.",
    solution:
      "A React.js frontend talking to a FastAPI backend, with PostgreSQL handling users, products and orders. Covers browsing, authentication, cart state and order-related workflows.",
    architecture:
      "React Frontend  →  FastAPI (REST)  →  PostgreSQL\n\nPRODUCT → AUTH → CART → ORDER",
    githubUrl: "",
    liveUrl: "",
  },
  {
    slug: "ai-resume-analyzer",
    index: "03 / 03",
    title: "AI Resume Analyzer",
    category: "AI · NLP · FULL-STACK",
    technologies: ["Python", "FastAPI", "Streamlit", "PostgreSQL", "spaCy"],
    skillIds: ["python", "fastapi", "streamlit", "postgresql", "spacy", "nlp", "ml", "sql", "api"],
    description:
      "Analyzes resumes against job descriptions and generates an ATS-style compatibility score — PDF text extraction, spaCy-based skill identification, job-description matching, missing-skill detection and automated improvement suggestions, backed by PostgreSQL and a Streamlit + FastAPI architecture.",
    problem:
      "Job seekers rarely know how their resume actually scores against an ATS or a specific job description, or which skills are missing.",
    solution:
      "Upload a resume and a job description; the system extracts text from the PDF, identifies skills with spaCy, matches against the job description, flags missing skills and generates automated improvement suggestions plus a downloadable report.",
    architecture:
      "Streamlit UI  →  FastAPI Backend  →  spaCy NLP Engine  →  PostgreSQL\n\nResume.pdf → Text Extraction → Skill Detection → Job Matching → Report",
    githubUrl: "",
    liveUrl: "",
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
