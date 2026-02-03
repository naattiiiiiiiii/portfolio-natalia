// Información personal centralizada
export const personalInfo = {
  name: "Natalia Cuadrado",
  title: "Full Stack Developer & AI Specialist",
  subtitle: "Ingeniera de Software con perfil híbrido",
  location: "Lanzarote, Las Palmas",
  email: "nataliacuadradohidalgo@gmail.com",
  phone: "+34 648 96 82 13",
  github: "https://github.com/naattiiiiiiiii/",
  linkedin: "https://www.linkedin.com/in/natalia-cuadrado-hidalgo-213482358/",
  quote: "Construyendo puentes entre desarrollo web e inteligencia artificial",
}

// Navegación
export const navigation = [
  { label: "Sobre mí", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experiencia", href: "#experience" },
  { label: "Educación", href: "#education" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
]

// Estadísticas
export const stats = [
  { number: "2+", label: "Años de experiencia" },
  { number: "6+", label: "Proyectos completados" },
  { number: "3", label: "Certificaciones" },
  { number: "C2", label: "Nivel de Inglés" },
]

// Habilidades reorganizadas para perfil híbrido
export const skills = {
  fullstack: {
    title: "Full Stack",
    description: "Desarrollo web completo",
    items: [
      { name: "Next.js", level: "Avanzado" },
      { name: "React", level: "Avanzado" },
      { name: "TypeScript", level: "Avanzado" },
      { name: "Node.js", level: "Intermedio" },
      { name: "Tailwind CSS", level: "Avanzado" },
      { name: "REST APIs", level: "Intermedio" },
    ]
  },
  aiData: {
    title: "IA & Big Data",
    description: "Inteligencia artificial y análisis de datos",
    items: [
      { name: "Python", level: "Avanzado" },
      { name: "Machine Learning", level: "Intermedio" },
      { name: "Deep Learning (CNN/DNN)", level: "Intermedio" },
      { name: "NLP", level: "Intermedio" },
      { name: "IA Generativa / RAG", level: "Intermedio" },
      { name: "Pandas / NumPy", level: "Intermedio" },
      { name: "Spark / Hadoop", level: "Básico" },
    ]
  },
  tools: {
    title: "Herramientas",
    description: "DevOps y productividad",
    items: [
      { name: "Git / GitHub", level: "Avanzado" },
      { name: "Docker", level: "Intermedio" },
      { name: "Vercel", level: "Avanzado" },
      { name: "VS Code", level: "Avanzado" },
      { name: "Prisma / MySQL", level: "Intermedio" },
      { name: "PostgreSQL / MongoDB", level: "Intermedio" },
    ]
  }
}

// Experiencia laboral
export const experiences = [
  {
    company: "Utilia.ai",
    role: "Developer in AI Solutions",
    period: "Nov 2025 - Presente",
    type: "Prácticas",
    description: "Desarrollo de soluciones full stack con integración de IA generativa en entorno startup. Construcción de interfaces web modernas con Next.js y TypeScript, implementación de pipelines de procesamiento con Python, y despliegue de modelos de lenguaje para automatización de procesos empresariales. Colaboración directa con el equipo de producto en metodologías ágiles.",
    tech: ["Next.js", "TypeScript", "Python", "IA Generativa", "LangChain", "APIs REST"],
    featured: false,
  },
  {
    company: "Brío Marketing Estudio",
    role: "Web Developer",
    period: "May 2025 - Jul 2025",
    type: "Contrato temporal",
    description: "Gestión técnica integral de proyectos web para clientes del sector empresarial. Desarrollo de soluciones personalizadas en WordPress con integración de APIs de terceros. Optimización de rendimiento web logrando mejoras de +40% en Core Web Vitals. Implementación de estrategias SEO técnico y auditorías de accesibilidad.",
    tech: ["WordPress", "PHP", "APIs REST", "SEO Técnico", "Google Analytics", "Optimización Web"],
    featured: false,
  },
  {
    company: "Marketec360",
    role: "Frontend Developer",
    period: "Ene 2025 - Abr 2025",
    type: "Prácticas",
    description: "Desarrollo de aplicaciones web escalables utilizando arquitectura moderna con Next.js 14 y TypeScript. Diseño e implementación de esquemas de bases de datos relacionales con Prisma ORM y MySQL. Creación de componentes reutilizables, integración de sistemas de autenticación y participación en code reviews siguiendo buenas prácticas de desarrollo.",
    tech: ["Next.js", "TypeScript", "React", "Prisma", "MySQL", "Tailwind CSS", "Git"],
    featured: false,
  },
]

// Educación
export const education = [
  {
    title: "Máster en Inteligencia Artificial y Big Data",
    institution: "CIFP Zonzamas",
    period: "2025 - 2026",
    status: "En curso",
    modality: "Presencial",
    highlights: [
      "Deep Learning: CNN/DNN",
      "NLP",
      "Big Data: Spark, Hadoop",
    ]
  },
  {
    title: "Máster Especialización en Python",
    institution: "CIFPD de La Rioja",
    period: "2025 - 2026",
    status: "En curso",
    modality: "Online",
    highlights: [
      "Python avanzado",
      "Análisis de datos",
      "Machine Learning",
    ]
  },
  {
    title: "Curso Superior Diginnova",
    institution: "FULP - Fundación Universitaria de Las Palmas",
    period: "2025",
    status: "En curso",
    modality: "Presencial",
    link: "https://www.fulp.es/programas/diginnova/beneficiarios/",
    highlights: [
      "Transformación Digital",
      "Competencias Digitales Avanzadas",
    ]
  },
  {
    title: "Grado Superior en Desarrollo de Aplicaciones Web",
    institution: "ILERNA FP",
    period: "2023 - 2025",
    status: "Completado",
    highlights: [
      "Arquitectura de software y algoritmos",
      "Programación Orientada a Objetos",
      "Bases de datos relacionales (SQL)",
      "Desarrollo con C# y Java",
    ]
  },
]

// Certificaciones
export const certifications = [
  {
    name: "C2 Distinction Speaking",
    issuer: "Anglia Examinations",
  },
  {
    name: "C1 English Certificate",
    issuer: "Cambridge International Education",
  },
  {
    name: "Elements of AI",
    issuer: "Universidad de Helsinki",
  },
]

// Proyectos
export const projects = [
  {
    title: "AI Business Analyst Agent",
    subtitle: "Agente Conversacional Proactivo - TFM",
    description: "Agente de IA que analiza modelos de negocio y evalúa viabilidad de proyectos de IA mediante diálogo estratégico. Desarrollado en colaboración con Socaity.ai.",
    tech: ["Python", "LangChain", "FastAPI", "Vue.js", "Socaity SDK"],
    featured: true,
    status: "En desarrollo",
    collaboration: "Socaity.ai",
  },
  {
    title: "Harmony App",
    subtitle: "Bienestar Laboral y Prevención del Burnout",
    description: "Plataforma de bienestar emocional para empresas. Incluye IA predictiva basada en neurociencia, técnicas de respiración guiadas, chat con asistente de IA, y seguimiento de progreso semanal.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "IA Generativa", "Vercel"],
    featured: false,
    status: "En desarrollo",
  },
  {
    title: "StickerAI",
    subtitle: "Generador de Stickers con IA",
    description: "Aplicación web que utiliza inteligencia artificial generativa para crear stickers personalizados para WhatsApp a partir de descripciones de texto. 100% gratuito y sin registro.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "IA Generativa", "Vercel"],
    link: "https://sticker-ai-natalia-s-projects-29dfd446.vercel.app",
    github: "https://github.com/naattiiiiiiiii/sticker-ai",
    featured: false,
  },
  {
    title: "AI Agents LangChain",
    subtitle: "Agentes de IA con LangChain y Ollama",
    description: "Colección de agentes de IA: un asistente de limpieza de archivos con Ollama/Llama 3.2 local, y un agente de viajes con LangChain + LangGraph usando Groq. Demuestra tool-augmented LLMs y patrón ReAct.",
    tech: ["Python", "LangChain", "LangGraph", "Ollama", "Groq"],
    github: "https://github.com/naattiiiiiiiii/ai-agents-langchain",
    featured: false,
  },
  {
    title: "ELIZA vs LLM",
    subtitle: "Comparativa Histórica de IA",
    description: "Aplicación educativa interactiva que compara el chatbot ELIZA de 1966 con los modelos de lenguaje modernos (LLMs), demostrando la evolución de la inteligencia artificial conversacional.",
    tech: ["HTML", "JavaScript", "CSS"],
    github: "https://github.com/naattiiiiiiiii/ElizaVSllm",
    featured: false,
  },
  {
    title: "CIFAR-10 Transfer Learning",
    subtitle: "Clasificación de Imágenes con Deep Learning",
    description: "Aplicación de transfer learning para clasificación de imágenes utilizando el dataset CIFAR-10. Implementación de redes neuronales convolucionales preentrenadas.",
    tech: ["Python", "Jupyter", "TensorFlow", "Deep Learning"],
    github: "https://github.com/naattiiiiiiiii/cifar10-transfer-learning-app",
    featured: false,
  },
  {
    title: "Proyecto Turismo CRISP-DM",
    subtitle: "Análisis de Datos Turísticos",
    description: "Proyecto de análisis de datos turísticos siguiendo la metodología CRISP-DM. Incluye limpieza de datos, análisis exploratorio y visualizaciones.",
    tech: ["Python", "Data Science", "CRISP-DM", "Pandas"],
    github: "https://github.com/naattiiiiiiiii/proyecto_turismo_crisp_dm",
    featured: false,
  },
]

// Secciones del footer
export const footerSections = {
  navigation: {
    title: "01 — Navegación",
    links: [
      { label: "Sobre mí", href: "#about" },
      { label: "Proyectos", href: "#projects" },
      { label: "Contacto", href: "#contact" },
    ]
  },
  social: {
    title: "02 — Redes",
    links: [
      { label: "GitHub", href: "https://github.com/naattiiiiiiiii/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/natalia-cuadrado-hidalgo-213482358/" },
    ]
  },
  projects: {
    title: "03 — Proyectos",
    links: [
      { label: "StickerAI", href: "https://sticker-ai-natalia-s-projects-29dfd446.vercel.app" },
      { label: "AI Agents", href: "https://github.com/naattiiiiiiiii/ai-agents-langchain" },
    ]
  }
}
