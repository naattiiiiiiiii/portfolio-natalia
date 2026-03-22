// Tipo para campos bilingües
export type B = { es: string; en: string }

// Información personal centralizada
export const personalInfo = {
  name: "Natalia Cuadrado",
  title: "Full Stack Developer & AI Specialist",
  subtitle: { es: "Ingeniera de Software con perfil híbrido", en: "Software Engineer with a hybrid profile" } as B,
  location: "Lanzarote, Spain · Open to relocate to Australia",
  email: "nataliacuadradohidalgo@gmail.com",
  phone: "+34 648 96 82 13",
  github: "https://github.com/naattiiiiiiiii/",
  linkedin: "https://www.linkedin.com/in/natalia-cuadrado-hidalgo-213482358/",
  quote: {
    es: "Construyendo puentes entre desarrollo web e inteligencia artificial",
    en: "Building bridges between web development and artificial intelligence",
  } as B,
  availability: "Australian Work & Holiday Visa (subclass 462) · Remote · Hybrid · On-site",
}

// Navegación
export const navigation = [
  { label: { es: "Sobre mí", en: "About" } as B, href: "#about" },
  { label: { es: "Skills", en: "Skills" } as B, href: "#skills" },
  { label: { es: "Experiencia", en: "Experience" } as B, href: "#experience" },
  { label: { es: "Educación", en: "Education" } as B, href: "#education" },
  { label: { es: "Proyectos", en: "Projects" } as B, href: "#projects" },
  { label: { es: "Contacto", en: "Contact" } as B, href: "#contact" },
]

// Estadísticas
export const stats = [
  { number: "2+", label: { es: "Años de experiencia", en: "Years of experience" } as B },
  { number: "8+", label: { es: "Proyectos completados", en: "Projects completed" } as B },
  { number: "3",  label: { es: "Certificaciones", en: "Certifications" } as B },
  { number: "C2", label: { es: "Nivel de Inglés", en: "English Level" } as B },
]

// Habilidades
export const skills = {
  fullstack: {
    title: { es: "Full Stack", en: "Full Stack" } as B,
    description: { es: "Desarrollo web completo", en: "Full-stack web development" } as B,
    items: [
      { name: "Next.js",      level: { es: "Avanzado", en: "Advanced" } as B },
      { name: "React",        level: { es: "Avanzado", en: "Advanced" } as B },
      { name: "TypeScript",   level: { es: "Avanzado", en: "Advanced" } as B },
      { name: "Node.js",      level: { es: "Intermedio", en: "Intermediate" } as B },
      { name: "Tailwind CSS", level: { es: "Avanzado", en: "Advanced" } as B },
      { name: "REST APIs",    level: { es: "Intermedio", en: "Intermediate" } as B },
    ],
  },
  aiData: {
    title: { es: "IA & Big Data", en: "AI & Big Data" } as B,
    description: { es: "Inteligencia artificial y análisis de datos", en: "Artificial intelligence and data analysis" } as B,
    items: [
      { name: "Python",                    level: { es: "Avanzado", en: "Advanced" } as B },
      { name: "LangChain / LangGraph",     level: { es: "Avanzado", en: "Advanced" } as B },
      { name: "RAG / ChromaDB / pgvector", level: { es: "Avanzado", en: "Advanced" } as B },
      { name: "Machine Learning",          level: { es: "Intermedio", en: "Intermediate" } as B },
      { name: "Deep Learning (CNN/DNN)",   level: { es: "Intermedio", en: "Intermediate" } as B },
      { name: "NLP",                       level: { es: "Intermedio", en: "Intermediate" } as B },
      { name: "Pandas / NumPy",            level: { es: "Intermedio", en: "Intermediate" } as B },
      { name: "Spark / Hadoop",            level: { es: "Básico", en: "Basic" } as B },
    ],
  },
  tools: {
    title: { es: "Herramientas", en: "Tools" } as B,
    description: { es: "DevOps y productividad", en: "DevOps & productivity" } as B,
    items: [
      { name: "Git / GitHub",          level: { es: "Avanzado", en: "Advanced" } as B },
      { name: "Docker",                level: { es: "Intermedio", en: "Intermediate" } as B },
      { name: "Vercel / Cloudflare",   level: { es: "Avanzado", en: "Advanced" } as B },
      { name: "PostgreSQL / Redis",    level: { es: "Avanzado", en: "Advanced" } as B },
      { name: "Prisma ORM",            level: { es: "Avanzado", en: "Advanced" } as B },
      { name: "Stripe / Stripe Connect", level: { es: "Intermedio", en: "Intermediate" } as B },
    ],
  },
}

// Experiencia laboral
export const experiences = [
  {
    company: "Inkubes",
    role: { es: "Freelance Full Stack Developer & AI Solutions", en: "Freelance Full Stack Developer & AI Solutions" } as B,
    period: { es: "Mar 2026 - Presente", en: "Mar 2026 - Present" } as B,
    type: { es: "Freelance", en: "Freelance" } as B,
    description: {
      es: "Desarrollo de soluciones web que integran inteligencia artificial y automatización en proyectos reales orientados a negocio. Interfaces modernas con React y Next.js, integración de APIs y modelos de IA, y colaboración en entornos ágiles con foco en impacto y entrega continua.",
      en: "Building web solutions integrating AI and automation for real business projects. Modern interfaces with React and Next.js, API and AI model integration, agile collaboration focused on impact and continuous delivery.",
    } as B,
    tech: ["Next.js", "React", "TypeScript", "AI", "REST APIs", "Automation"],
    featured: false,
  },
  {
    company: "Consorcio Emergencias Lanzarote",
    role: { es: "Coordinadora Tecnológica y de Desarrollo", en: "Technology & Development Coordinator" } as B,
    period: { es: "Mar 2026 - Presente", en: "Mar 2026 - Present" } as B,
    type: { es: "Voluntaria", en: "Volunteer" } as B,
    description: {
      es: "Coordinación del equipo de desarrollo de ACESLAN, app oficial para el Consorcio de Seguridad y Emergencias de Lanzarote (colaboración con Cabildo de Lanzarote). Nexo estratégico entre el equipo técnico y los operativos de emergencias. Gestión de repositorios GitHub, revisión de PRs, planificación de sprints y definición de propuestas de funcionalidades de IA.",
      en: "Coordinating the development team for ACESLAN, the official app for the Lanzarote Emergency Services Consortium (partnership with Cabildo de Lanzarote). Strategic link between the technical team and emergency operations. GitHub repository management, PR reviews, sprint planning and AI feature proposals.",
    } as B,
    tech: ["Kotlin Multiplatform", "Android", "iOS", "Google Maps", "GitHub", "Agile"],
    featured: false,
  },
  {
    company: "socaity.ai",
    role: { es: "AI Software Engineer — TFM", en: "AI Software Engineer — Master's Thesis" } as B,
    period: "Ene 2026 - Mar 2026",
    type: { es: "Proyecto Académico", en: "Academic Project" } as B,
    description: {
      es: "Desarrollé el Socaity Agent, agente conversacional B2B que automatiza la cualificación de clientes, reduciendo el tiempo de gestión de 20 a 3-5 minutos. Arquitectura modular con LangGraph (State Machine) + LangChain, sistema RAG con ChromaDB y clasificador híbrido (ML/RegEx) con 95.9% de precisión en detección de intenciones. Incluye Guardrails de seguridad contra Prompt Injection.",
      en: "Built the Socaity Agent, a B2B conversational agent that automates client qualification, reducing handling time from 20 to 3-5 minutes. Modular architecture with LangGraph (State Machine) + LangChain, RAG system with ChromaDB, and a hybrid classifier (ML/RegEx) with 95.9% intent detection accuracy. Includes security guardrails against Prompt Injection.",
    } as B,
    tech: ["Python", "FastAPI", "LangChain", "LangGraph", "ChromaDB", "RAG", "Vue 3", "Supabase", "Gemini", "Claude", "Llama"],
    featured: false,
  },
  {
    company: "Utilia.ai",
    role: { es: "Developer in AI Solutions", en: "Developer in AI Solutions" } as B,
    period: "Nov 2025 - Mar 2026",
    type: { es: "Prácticas", en: "Internship" } as B,
    description: {
      es: "Diseño e implementación de soluciones de IA para clientes reales: integraciones LLM (OpenAI, Anthropic, Google), arquitecturas RAG y automatización de procesos. Desarrollo full stack con Next.js y TypeScript en productos SaaS internos (AlignIA, Lumin Ecosystem). Consultoría de IA a PYMEs, traduciendo requisitos de negocio en estrategias técnicas accionables.",
      en: "Designed and implemented AI solutions for real clients: LLM integrations (OpenAI, Anthropic, Google), RAG architectures and process automation. Full-stack development with Next.js and TypeScript on internal SaaS products (AlignIA, Lumin Ecosystem). AI consulting for SMEs, translating business requirements into actionable technical strategies.",
    } as B,
    tech: ["Next.js", "TypeScript", "Python", "LangChain", "RAG", "OpenAI", "Anthropic", "APIs REST"],
    featured: false,
  },
  {
    company: "Brío Marketing Estudio",
    role: { es: "Web Developer", en: "Web Developer" } as B,
    period: "May 2025 - Jul 2025",
    type: { es: "Contrato temporal", en: "Temporary Contract" } as B,
    description: {
      es: "Gestión técnica integral de proyectos web para clientes del sector empresarial. Optimización de rendimiento web logrando mejoras de +40% en Core Web Vitals. Implementación de estrategias SEO técnico y auditorías de accesibilidad.",
      en: "Full technical management of web projects for corporate clients. Web performance optimisation achieving +40% improvements in Core Web Vitals. Technical SEO strategies and accessibility audits.",
    } as B,
    tech: ["WordPress", "PHP", "APIs REST", "Technical SEO", "Google Analytics"],
    featured: false,
  },
  {
    company: "Marketec360",
    role: { es: "Frontend Developer", en: "Frontend Developer" } as B,
    period: "Ene 2025 - Abr 2025",
    type: { es: "Prácticas", en: "Internship" } as B,
    description: {
      es: "Desarrollo de aplicaciones web escalables con Next.js 14 y TypeScript. Diseño e implementación de esquemas de bases de datos relacionales con Prisma ORM y MySQL. Creación de componentes reutilizables y participación en code reviews.",
      en: "Built scalable web applications with Next.js 14 and TypeScript. Designed and implemented relational database schemas with Prisma ORM and MySQL. Created reusable components and participated in code reviews.",
    } as B,
    tech: ["Next.js", "TypeScript", "React", "Prisma", "MySQL", "Tailwind CSS", "Git"],
    featured: false,
  },
]

// Educación
export const education = [
  {
    title: { es: "Máster en Inteligencia Artificial y Big Data", en: "Master's in Artificial Intelligence & Big Data" } as B,
    institution: "CIFP Zonzamas",
    period: "2025 - 2026",
    status: { es: "En curso", en: "In progress" } as B,
    modality: { es: "Presencial", en: "On-site" } as B,
    highlights: [
      { es: "Deep Learning: CNN/DNN", en: "Deep Learning: CNN/DNN" } as B,
      { es: "NLP", en: "NLP" } as B,
      { es: "Big Data: Spark, Hadoop", en: "Big Data: Spark, Hadoop" } as B,
    ],
  },
  {
    title: { es: "Máster Especialización en Python", en: "Master's Specialisation in Python" } as B,
    institution: "CIFPD de La Rioja",
    period: "2025 - 2026",
    status: { es: "En curso", en: "In progress" } as B,
    modality: { es: "Online", en: "Online" } as B,
    highlights: [
      { es: "Python avanzado", en: "Advanced Python" } as B,
      { es: "Análisis de datos", en: "Data analysis" } as B,
      { es: "Machine Learning", en: "Machine Learning" } as B,
    ],
  },
  {
    title: { es: "Certificado Universitario — Innovación, Sostenibilidad y Transformación Digital", en: "University Certificate — Innovation, Sustainability & Digital Transformation" } as B,
    institution: "FULP - Fundación Universitaria de Las Palmas (Diginnova)",
    period: "2025 - 2026",
    status: { es: "En curso", en: "In progress" } as B,
    modality: { es: "Presencial", en: "On-site" } as B,
    link: "https://www.fulp.es/programas/diginnova/beneficiarios/",
    highlights: [
      { es: "Transformación Digital", en: "Digital Transformation" } as B,
      { es: "Competencias Digitales Avanzadas", en: "Advanced Digital Competencies" } as B,
    ],
  },
  {
    title: { es: "Grado Superior en Desarrollo de Aplicaciones Web", en: "Higher Degree in Web Application Development" } as B,
    institution: "ILERNA FP",
    period: "2023 - 2025",
    status: { es: "Completado", en: "Completed" } as B,
    highlights: [
      { es: "Arquitectura de software y algoritmos", en: "Software architecture & algorithms" } as B,
      { es: "Programación Orientada a Objetos", en: "Object-Oriented Programming" } as B,
      { es: "Bases de datos relacionales (SQL)", en: "Relational databases (SQL)" } as B,
      { es: "Desarrollo con C# y Java", en: "Development with C# and Java" } as B,
    ],
  },
  {
    title: { es: "Currículo Británico — GCE A-Levels", en: "British Curriculum — GCE A-Levels" } as B,
    institution: "British School of Lanzarote",
    period: "2009 - 2022",
    status: { es: "Completado", en: "Completed" } as B,
    highlights: [
      { es: "Educación bilingüe desde los 5 años", en: "Full bilingual education from age 5" } as B,
      { es: "Biology (A) · Spanish (A) · Global Perspectives (A)", en: "Biology (A) · Spanish (A) · Global Perspectives (A)" } as B,
      { es: "Inglés C2 nativo — Cambridge & Anglia", en: "Native C2 English — Cambridge & Anglia certified" } as B,
    ],
  },
]

// Certificaciones
export const certifications = [
  { name: "C2 Distinction Speaking", issuer: "Anglia Examinations" },
  { name: "C1 English Certificate",  issuer: "Cambridge International Education" },
  { name: "Elements of AI",          issuer: "University of Helsinki" },
]

// Proyectos
export const projects = [
  {
    title: "Harmony App",
    subtitle: {
      es: "Plataforma SaaS de Bienestar Laboral — Fundadora y Desarrolladora Única",
      en: "Enterprise Employee Wellbeing SaaS — Founder & Sole Developer",
    } as B,
    description: {
      es: "Plataforma SaaS enterprise (~167.000 líneas de código) que detecta el burnout de empleados mediante IA (Groq/Mixtral + modelo Maslach Burnout Inventory). Incluye marketplace de psicólogos, mensajería en tiempo real, dashboards multi-rol y análisis avanzados.",
      en: "Enterprise SaaS platform (~167,000 lines of code) detecting employee burnout using AI (Groq/Mixtral + Maslach Burnout Inventory model). Includes a psychologist marketplace, real-time messaging, multi-role dashboards and advanced analytics.",
    } as B,
    tech: ["Next.js 15", "React 19", "TypeScript", "PostgreSQL", "Prisma ORM", "LangChain RAG", "Stripe Connect", "Pusher", "Redis", "BullMQ", "Cloudflare WAF", "Sentry", "2FA", "GDPR"],
    link: "https://www.theharmonyapp.es",
    featured: true,
    status: { es: "En producción", en: "In production" } as B,
  },
  {
    title: "AI Business Analyst Agent",
    subtitle: {
      es: "Agente Conversacional Proactivo - TFM",
      en: "Proactive Conversational Agent - Master's Thesis",
    } as B,
    description: {
      es: "Agente de IA que analiza modelos de negocio y evalúa viabilidad de proyectos de IA mediante diálogo estratégico. Desarrollado en colaboración con Socaity.ai.",
      en: "AI agent that analyses business models and evaluates AI project viability through strategic dialogue. Developed in collaboration with Socaity.ai.",
    } as B,
    tech: ["Python", "LangChain", "FastAPI", "Vue.js", "Socaity SDK"],
    featured: false,
    status: { es: "En desarrollo", en: "In development" } as B,
    collaboration: "Socaity.ai",
  },
  {
    title: "ACESLAN — Emergency App",
    subtitle: {
      es: "App Oficial del Consorcio de Emergencias de Lanzarote",
      en: "Official App for the Lanzarote Emergency Services Consortium",
    } as B,
    description: {
      es: "App móvil nativa (iOS/Android) para el Consorcio de Seguridad y Emergencias de Lanzarote, en colaboración con el Cabildo de Lanzarote. Coordiné un equipo de 3-4 desarrolladores: gestión de repositorios GitHub, revisión de PRs, planificación de sprints y propuestas de funcionalidades IA.",
      en: "Native mobile app (iOS/Android) for the Lanzarote Security and Emergency Consortium, in partnership with the Cabildo de Lanzarote. Coordinated a team of 3-4 developers: GitHub repository management, PR reviews, sprint planning and AI feature proposals.",
    } as B,
    tech: ["Kotlin Multiplatform", "Android", "iOS", "Google Maps", "GitHub", "Agile"],
    featured: false,
    status: { es: "En desarrollo", en: "In development" } as B,
  },
  {
    title: "StickerAI",
    subtitle: {
      es: "Generador de Stickers con IA",
      en: "AI Sticker Generator",
    } as B,
    description: {
      es: "Aplicación web que utiliza inteligencia artificial generativa para crear stickers personalizados para WhatsApp a partir de descripciones de texto. 100% gratuito y sin registro.",
      en: "Web app using generative AI to create custom WhatsApp stickers from text descriptions. 100% free, no sign-up required.",
    } as B,
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Generative AI", "Vercel"],
    link: "https://sticker-ai-natalia-s-projects-29dfd446.vercel.app",
    github: "https://github.com/naattiiiiiiiii/sticker-ai",
    featured: false,
  },
  {
    title: "WhatsApp AI Agents",
    subtitle: {
      es: "4 agentes de IA controlados desde el móvil",
      en: "4 AI agents controlled from your phone",
    } as B,
    description: {
      es: "Sistema de agentes de IA controlables desde Telegram/WhatsApp que interactúan con el ordenador: búsqueda de archivos, lectura de emails, creación de notas y búsquedas web. Stack 100% gratuito y open source.",
      en: "AI agent system controllable from Telegram/WhatsApp that interacts with your computer: file search, email reading, note creation and web searches. 100% free stack, open source.",
    } as B,
    tech: ["Python", "Groq", "Llama 3.3 70B", "Cloudflare Workers", "Turso", "Upstash"],
    github: "https://github.com/naattiiiiiiiii/whatsapp-ai-agents",
    featured: false,
  },
  {
    title: "AI Agents LangChain",
    subtitle: {
      es: "Agentes de IA con LangChain y Ollama",
      en: "AI Agents with LangChain and Ollama",
    } as B,
    description: {
      es: "Colección de agentes de IA: un asistente de limpieza de archivos con Ollama/Llama 3.2 local, y un agente de viajes con LangChain + LangGraph usando Groq. Demuestra tool-augmented LLMs y patrón ReAct.",
      en: "Collection of AI agents: a file cleanup assistant using local Ollama/Llama 3.2, and a travel agent with LangChain + LangGraph using Groq. Demonstrates tool-augmented LLMs and the ReAct pattern.",
    } as B,
    tech: ["Python", "LangChain", "LangGraph", "Ollama", "Groq"],
    github: "https://github.com/naattiiiiiiiii/ai-agents-langchain",
    featured: false,
  },
  {
    title: "ELIZA vs LLM",
    subtitle: {
      es: "Comparativa Histórica de IA",
      en: "Historical AI Comparison",
    } as B,
    description: {
      es: "Aplicación educativa interactiva que compara el chatbot ELIZA de 1966 con los modelos de lenguaje modernos (LLMs), demostrando la evolución de la inteligencia artificial conversacional.",
      en: "Interactive educational app comparing the 1966 ELIZA chatbot with modern LLMs, demonstrating the evolution of conversational AI.",
    } as B,
    tech: ["HTML", "JavaScript", "CSS"],
    github: "https://github.com/naattiiiiiiiii/ElizaVSllm",
    featured: false,
  },
  {
    title: "CIFAR-10 Transfer Learning",
    subtitle: {
      es: "Clasificación de Imágenes con Deep Learning",
      en: "Image Classification with Deep Learning",
    } as B,
    description: {
      es: "Aplicación de transfer learning para clasificación de imágenes utilizando el dataset CIFAR-10. Implementación de redes neuronales convolucionales preentrenadas.",
      en: "Transfer learning applied to image classification using the CIFAR-10 dataset. Implementation of pre-trained convolutional neural networks.",
    } as B,
    tech: ["Python", "Jupyter", "TensorFlow", "Deep Learning"],
    github: "https://github.com/naattiiiiiiiii/cifar10-transfer-learning-app",
    featured: false,
  },
  {
    title: "Proyecto Turismo CRISP-DM",
    subtitle: {
      es: "Análisis de Datos Turísticos",
      en: "Tourism Data Analysis",
    } as B,
    description: {
      es: "Proyecto de análisis de datos turísticos siguiendo la metodología CRISP-DM. Incluye limpieza de datos, análisis exploratorio y visualizaciones.",
      en: "Tourism data analysis project following the CRISP-DM methodology. Includes data cleaning, exploratory analysis and visualisations.",
    } as B,
    tech: ["Python", "Data Science", "CRISP-DM", "Pandas"],
    github: "https://github.com/naattiiiiiiiii/proyecto_turismo_crisp_dm",
    featured: false,
  },
]

// Secciones del footer
export const footerSections = {
  navigation: {
    title: { es: "01 — Navegación", en: "01 — Navigation" } as B,
    links: [
      { label: { es: "Sobre mí", en: "About" } as B, href: "#about" },
      { label: { es: "Proyectos", en: "Projects" } as B, href: "#projects" },
      { label: { es: "Contacto", en: "Contact" } as B, href: "#contact" },
    ],
  },
  social: {
    title: { es: "02 — Redes", en: "02 — Social" } as B,
    links: [
      { label: "GitHub", href: "https://github.com/naattiiiiiiiii/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/natalia-cuadrado-hidalgo-213482358/" },
    ],
  },
  projects: {
    title: { es: "03 — Proyectos", en: "03 — Projects" } as B,
    links: [
      { label: "Harmony", href: "https://www.theharmonyapp.es" },
      { label: "StickerAI", href: "https://sticker-ai-natalia-s-projects-29dfd446.vercel.app" },
    ],
  },
}
