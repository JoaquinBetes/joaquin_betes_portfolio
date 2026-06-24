import { Injectable } from '@angular/core';
import {
  EducationItem,
  ExperienceItem,
  Project,
  SkillGroup,
  SoftSkill,
  Technology,
} from '../interfaces/models';

/**
 * Technology catalog. `satisfies` keeps literal keys so they can be
 * referenced safely (e.g. TECH.python) and type-checked.
 */
const TECH = {
  python: { name: 'python', label: 'Python', icon: 'assets/icons/python.svg' },
  typescript: { name: 'typescript', label: 'TypeScript', icon: 'assets/icons/ts.svg' },
  javascript: { name: 'javascript', label: 'JavaScript', icon: 'assets/icons/js.svg' },
  csharp: { name: 'csharp', label: 'C#', icon: 'assets/icons/csharp.svg' },
  java: { name: 'java', label: 'Java', icon: 'assets/icons/java.svg' },
  sql: { name: 'sql', label: 'SQL', bi: 'bi-database' },
  php: { name: 'php', label: 'PHP', icon: 'assets/icons/php.svg' },
  html: { name: 'html', label: 'HTML', icon: 'assets/icons/html.svg' },
  css: { name: 'css', label: 'CSS', icon: 'assets/icons/css.svg' },

  dotnet: { name: 'dotnet', label: '.NET', icon: 'assets/icons/.NET.svg' },
  aspnet: { name: 'aspnet', label: 'ASP.NET Core', icon: 'assets/icons/.NET.svg' },
  entityframework: { name: 'entityframework', label: 'Entity Framework', bi: 'bi-database-gear' },
  node: { name: 'node', label: 'Node.js', icon: 'assets/icons/node.svg' },
  express: { name: 'express', label: 'Express', icon: 'assets/icons/expressjs.svg' },
  angular: { name: 'angular', label: 'Angular', icon: 'assets/icons/angular.svg' },
  bootstrap: { name: 'bootstrap', label: 'Bootstrap', icon: 'assets/icons/bootstrap.svg' },
  react: { name: 'react', label: 'React', icon: 'assets/icons/react.svg' },
  nextjs: { name: 'nextjs', label: 'Next.js', icon: 'assets/icons/nextjs.svg' },

  vercelai: { name: 'vercelai', label: 'Vercel AI SDK', icon: 'assets/icons/vercel.svg' },
  openai: { name: 'openai', label: 'OpenAI', bi: 'bi-asterisk' },
  anthropic: { name: 'anthropic', label: 'Anthropic', icon: 'assets/icons/anthropic.svg' },
  ollama: { name: 'ollama', label: 'Ollama', icon: 'assets/icons/ollama.svg' },
  n8n: { name: 'n8n', label: 'n8n', icon: 'assets/icons/n8n.svg' },
  llm: { name: 'llm', label: 'LLMs / RAG', bi: 'bi-cpu' },
  vector: { name: 'vector', label: 'Vector Search', bi: 'bi-search' },
  markitdown: { name: 'markitdown', label: 'MarkItDown', bi: 'bi-filetype-md' },
  pandas: { name: 'pandas', label: 'Pandas', icon: 'assets/icons/pandas.png' },
  numpy: { name: 'numpy', label: 'NumPy', icon: 'assets/icons/numpy.svg' },
  matplotlib: { name: 'matplotlib', label: 'Matplotlib', bi: 'bi-graph-up' },
  seaborn: { name: 'seaborn', label: 'Seaborn', bi: 'bi-bar-chart-line' },
  sklearn: { name: 'sklearn', label: 'scikit-learn', icon: 'assets/icons/scikitlearn.svg' },
  neat: { name: 'neat', label: 'NEAT', bi: 'bi-diagram-2' },
  pygame: { name: 'pygame', label: 'PyGame', bi: 'bi-controller' },

  postgres: { name: 'postgres', label: 'PostgreSQL', icon: 'assets/icons/postgresql.svg' },
  mysql: { name: 'mysql', label: 'MySQL', icon: 'assets/icons/mysql.svg' },
  sqlserver: { name: 'sqlserver', label: 'SQL Server', icon: 'assets/icons/sqlserver.svg' },
  mongodb: { name: 'mongodb', label: 'MongoDB', icon: 'assets/icons/mongodb.svg' },
  mikroorm: { name: 'mikroorm', label: 'MikroORM', icon: 'assets/icons/mikroorm.svg' },

  git: { name: 'git', label: 'Git', icon: 'assets/icons/git.svg' },
  github: { name: 'github', label: 'GitHub', icon: 'assets/icons/github.svg' },
  googlemaps: { name: 'googlemaps', label: 'Google Maps API', icon: 'assets/icons/googlemaps.png' },
} satisfies Record<string, Technology>;

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private readonly skillGroups: SkillGroup[] = [
    {
      title: { es: 'Lenguajes', en: 'Languages' },
      technologies: [TECH.python, TECH.typescript, TECH.javascript, TECH.csharp, TECH.java, TECH.sql],
    },
    {
      title: { es: 'IA & LLMs', en: 'AI & LLMs' },
      technologies: [TECH.vercelai, TECH.openai, TECH.anthropic, TECH.ollama, TECH.llm, TECH.vector, TECH.n8n],
    },
    {
      title: { es: 'Datos & Análisis', en: 'Data & Analytics' },
      technologies: [TECH.pandas, TECH.numpy, TECH.matplotlib, TECH.seaborn, TECH.sklearn],
    },
    {
      title: { es: 'Backend & Frameworks', en: 'Backend & Frameworks' },
      technologies: [TECH.aspnet, TECH.entityframework, TECH.node, TECH.express, TECH.angular, TECH.bootstrap],
    },
    {
      title: { es: 'Bases de datos', en: 'Databases' },
      technologies: [TECH.postgres, TECH.mysql, TECH.sqlserver, TECH.mikroorm],
    },
    {
      title: { es: 'Herramientas', en: 'Tools' },
      technologies: [TECH.git, TECH.github],
    },
  ];

  private readonly softSkills: SoftSkill[] = [
    {
      bi: 'bi-people',
      title: { es: 'Trabajo en equipo', en: 'Teamwork' },
      description: {
        es: 'Colaboro con perfiles diversos y aporto a un ambiente productivo y positivo.',
        en: 'I collaborate with diverse profiles and contribute to a productive, positive environment.',
      },
    },
    {
      bi: 'bi-chat-dots',
      title: { es: 'Comunicación efectiva', en: 'Effective communication' },
      description: {
        es: 'Expreso ideas con claridad y adapto el mensaje a cada audiencia, técnica o no.',
        en: 'I express ideas clearly and adapt the message to each audience, technical or not.',
      },
    },
    {
      bi: 'bi-translate',
      title: { es: 'Inglés fluido', en: 'Fluent English' },
      description: {
        es: 'Formación bilingüe que facilita el trabajo internacional y el aprendizaje continuo.',
        en: 'Bilingual background that enables international work and continuous learning.',
      },
    },
    {
      bi: 'bi-puzzle',
      title: { es: 'Resolución de problemas', en: 'Problem solving' },
      description: {
        es: 'Enfoque estructurado y analítico para llegar a soluciones eficientes.',
        en: 'A structured, analytical approach to reach efficient solutions.',
      },
    },
    {
      bi: 'bi-arrow-repeat',
      title: { es: 'Adaptabilidad', en: 'Adaptability' },
      description: {
        es: 'Me ajusto rápido a nuevas tecnologías, dominios y dinámicas de trabajo.',
        en: 'I adapt quickly to new technologies, domains and ways of working.',
      },
    },
    {
      bi: 'bi-lightbulb',
      title: { es: 'Pensamiento crítico', en: 'Critical thinking' },
      description: {
        es: 'Formación científica que impulsa decisiones basadas en datos y razonamiento.',
        en: 'A scientific background that drives data- and reasoning-based decisions.',
      },
    },
  ];

  private readonly experience: ExperienceItem[] = [
    {
      id: 'efisat',
      role: { es: 'Desarrollador Backend .NET & IA', en: '.NET Backend & AI Developer' },
      company: 'EFISAT',
      period: { es: 'Feb 2025 – Actualidad', en: 'Feb 2025 – Present' },
      location: { es: 'Remoto', en: 'Remote' },
      summary: {
        es: 'Desarrollo backend sobre .NET y, en paralelo, soluciones de IA y automatización que hoy son parte central de mi trabajo.',
        en: 'Backend development on .NET and, in parallel, AI and automation solutions that are now a core part of my work.',
      },
      highlights: {
        es: [
          'Reparé y optimicé procesos críticos del negocio, resolviendo bugs que llevaban años sin solución.',
          'Desarrollé endpoints de API, funciones y stored procedures en MySQL y PostgreSQL.',
          'Construí un diagramador de tareas e hice reingeniería de un exportador/importador de procesos.',
          'Trabajé sobre la PWA, la API y las bibliotecas compartidas, incluyendo el frontend de mis funcionalidades.',
          'Construí soluciones de IA: asistentes con LLMs (Vercel AI SDK), automatizaciones en n8n y pipelines de datos.',
        ],
        en: [
          'Repaired and optimized business-critical processes, fixing long-standing bugs.',
          'Built API endpoints, functions and stored procedures in MySQL and PostgreSQL.',
          'Created a task diagrammer and re-engineered a process import/export tool.',
          'Worked across the PWA, the API and shared libraries, including the frontend of my features.',
          'Built AI solutions: LLM assistants (Vercel AI SDK), n8n automations and data pipelines.',
        ],
      },
      technologies: [
        TECH.csharp,
        TECH.dotnet,
        TECH.postgres,
        TECH.mysql,
        TECH.vercelai,
        TECH.n8n,
        TECH.python,
        TECH.angular,
      ],
    },
    {
      id: 'freelance-abud',
      role: { es: 'Desarrollador Frontend & Full-Stack', en: 'Frontend & Full-Stack Developer' },
      company: 'Proyectos a medida (colaboración con Ing. S. E. Abud)',
      period: { es: '2021 – 2023', en: '2021 – 2023' },
      location: { es: 'Remoto', en: 'Remote' },
      summary: {
        es: 'Desarrollo de aplicaciones web a medida para distintos clientes.',
        en: 'Custom web application development for various clients.',
      },
      highlights: {
        es: [
          'App web de administración inmobiliaria con paneles multi-rol (inquilinos, propietarios, administradores), notificaciones automatizadas y gestión documental.',
          'Sistema web de gestión de tokens virtuales para un ecosistema cerrado, con roles de administrador y usuario (generación, supervisión y transferencia de unidades de valor).',
          'Plataforma de gestión municipal con mensajería interna, administración de perfiles por rol e informes de gestión.',
        ],
        en: [
          'Real-estate management web app with multi-role panels (tenants, owners, administrators), automated notifications and document management.',
          'Virtual token management system for a closed ecosystem, with administrator and user roles (issuance, supervision and transfer of value units).',
          'Municipal management platform with internal messaging, per-role profile administration and management reports.',
        ],
      },
      technologies: [TECH.php, TECH.mysql, TECH.javascript, TECH.html, TECH.css, TECH.bootstrap],
    },
  ];

  private readonly education: EducationItem[] = [
    {
      id: 'ugr-ds',
      degree: { es: 'Ciclo de Licenciatura en Ciencia de Datos', en: 'Data Science degree' },
      institution: 'Universidad del Gran Rosario (UGR)',
      period: { es: '2026 – Actualidad', en: '2026 – Present' },
      status: { es: 'En curso', en: 'In progress' },
    },
    {
      id: 'utn-aus',
      degree: { es: 'Analista Universitario de Sistemas', en: 'University Systems Analyst' },
      institution: 'Universidad Tecnológica Nacional (UTN FRRo) — Rosario',
      period: { es: '2019 – 2024', en: '2019 – 2024' },
      status: { es: 'Graduado', en: 'Graduated' },
    },
    {
      id: 'physics',
      degree: { es: 'Licenciatura en Física (incompleta)', en: 'Physics (incomplete)' },
      institution: 'Universidad Nacional de Rosario (UNR FCEIA)',
      period: { es: '2014 – 2018', en: '2014 – 2018' },
      detail: {
        es: 'Base sólida en matemática, física y pensamiento analítico.',
        en: 'Strong foundation in mathematics, physics and analytical thinking.',
      },
    },
    {
      id: 'english',
      degree: { es: 'Secundario especializado en inglés', en: 'Secondary school specialized in English' },
      institution: 'Cultura Inglesa — Venado Tuerto',
      period: { es: '2013', en: '2013' },
      detail: {
        es: 'Formación bilingüe; nivel de inglés avanzado.',
        en: 'Bilingual education; advanced English level.',
      },
    },
  ];

  private readonly projects: Project[] = [
    {
      id: 'efisat-ai-assistant',
      context: 'work',
      featured: true,
      coverIcon: 'bi-chat-square-dots',
      title: { es: 'Asistente de IA corporativo', en: 'Corporate AI assistant' },
      role: { es: 'Desarrollador IA', en: 'AI Developer' },
      summary: {
        es: 'Plataforma de chat tipo ChatGPT para uso interno de la empresa, capaz de operar con distintos motores de IA, construida con el AI SDK de Vercel.',
        en: 'A ChatGPT-style chat platform for internal company use, able to run on different AI engines, built with the Vercel AI SDK.',
      },
      highlights: {
        es: [
          'Interfaz conversacional con streaming de respuestas y soporte multi-modelo.',
          'Capa de abstracción para alternar entre proveedores de LLM según la necesidad.',
          'Integración con servicios internos y manejo de contexto de la conversación.',
        ],
        en: [
          'Conversational UI with response streaming and multi-model support.',
          'Abstraction layer to switch between LLM providers as needed.',
          'Integration with internal services and conversation context handling.',
        ],
      },
      technologies: [TECH.vercelai, TECH.nextjs, TECH.react, TECH.typescript, TECH.llm],
    },
    {
      id: 'efisat-n8n',
      context: 'work',
      featured: true,
      coverIcon: 'bi-diagram-3',
      title: { es: 'Automatización de procesos con n8n & IA', en: 'Process automation with n8n & AI' },
      role: { es: 'Desarrollador / Automatización', en: 'Developer / Automation' },
      summary: {
        es: 'Diseño e implementación de automatizaciones en n8n que combinan IA con las APIs de la empresa para resolver procesos reales del negocio.',
        en: 'Design and implementation of n8n automations combining AI with the company APIs to solve real business processes.',
      },
      highlights: {
        es: [
          'Chatbot de Telegram que guía a empleados para completar procesos y orquesta tools contra las APIs internas.',
          'Reingeniería de un workflow de correo: categoriza el mensaje, procesa cuerpo y adjuntos y responde automáticamente.',
          'Extracción de texto, tablas e imágenes de los adjuntos para alimentar al LLM que genera la respuesta.',
        ],
        en: [
          'Telegram chatbot that guides employees through processes and orchestrates tools against internal APIs.',
          'Re-engineered an email workflow: categorizes the message, processes body and attachments and replies automatically.',
          'Extracts text, tables and images from attachments to feed the LLM that drafts the response.',
        ],
      },
      technologies: [TECH.n8n, TECH.llm, TECH.python, TECH.markitdown],
    },
    {
      id: 'efisat-rag',
      context: 'work',
      featured: true,
      coverIcon: 'bi-search',
      title: { es: 'Asistentes RAG y analítica conversacional', en: 'RAG assistants & conversational analytics' },
      role: { es: 'Desarrollador IA / Datos', en: 'AI / Data Developer' },
      summary: {
        es: 'Workflows de IA que responden consultas combinando búsqueda vectorial sobre documentación y acceso a datos, adaptándose al cliente que accede.',
        en: 'AI workflows that answer queries by combining vector search over documentation and data access, adapting to the client that connects.',
      },
      highlights: {
        es: [
          'Búsqueda vectorial sobre manuales, con acceso segmentado según el cliente.',
          'Flujo de consultas a base de datos que genera estadísticas y gráficos para responder al usuario.',
          'API en Python con MarkItDown y otras librerías para extraer texto e imágenes de documentos de forma óptima para el LLM.',
        ],
        en: [
          'Vector search over manuals, with access segmented per client.',
          'A database-query flow that generates statistics and charts to answer the user.',
          'A Python API using MarkItDown and other libraries to optimally extract text and images from documents for the LLM.',
        ],
      },
      technologies: [TECH.llm, TECH.vector, TECH.python, TECH.markitdown, TECH.n8n],
    },
    {
      id: 'efisat-platform',
      context: 'work',
      coverIcon: 'bi-gear-wide-connected',
      title: { es: 'Plataforma de gestión de procesos', en: 'Process management platform' },
      role: { es: 'Desarrollador Backend', en: 'Backend Developer' },
      summary: {
        es: 'Trabajo continuo sobre el producto principal de la empresa: API, PWA y bibliotecas compartidas en el ecosistema .NET.',
        en: 'Ongoing work on the company core product: API, PWA and shared libraries within the .NET ecosystem.',
      },
      highlights: {
        es: [
          'Nuevos endpoints, funciones y stored procedures en MySQL y PostgreSQL.',
          'Diagramador de tareas y reingeniería del exportador/importador de procesos.',
          'Resolución de bugs históricos y mejoras de mantenibilidad.',
        ],
        en: [
          'New endpoints, functions and stored procedures in MySQL and PostgreSQL.',
          'Task diagrammer and re-engineering of the process import/export tool.',
          'Fixed long-standing bugs and improved maintainability.',
        ],
      },
      technologies: [TECH.csharp, TECH.dotnet, TECH.postgres, TECH.mysql, TECH.angular],
    },
    {
      id: 'real-estate',
      context: 'freelance',
      image: 'assets/images/inmobiliaria.png',
      title: { es: 'Administración inmobiliaria', en: 'Real-estate management' },
      role: { es: 'Frontend & Full-Stack', en: 'Frontend & Full-Stack' },
      summary: {
        es: 'Aplicación web para administrar propiedades y alquileres, con paneles diferenciados para inquilinos, propietarios y administradores.',
        en: 'A web app to manage properties and rentals, with dedicated panels for tenants, owners and administrators.',
      },
      highlights: {
        es: [
          'Paneles multi-rol con permisos diferenciados.',
          'Notificaciones automáticas de pagos vencidos y mensajes.',
          'Gestión documental y carga/validación de comprobantes de pago.',
        ],
        en: [
          'Multi-role panels with differentiated permissions.',
          'Automatic notifications for overdue payments and messages.',
          'Document management and upload/validation of payment receipts.',
        ],
      },
      technologies: [TECH.php, TECH.mysql, TECH.javascript, TECH.html, TECH.css, TECH.bootstrap],
    },
    {
      id: 'tokens',
      context: 'freelance',
      image: 'assets/images/tokens.png',
      title: { es: 'Sistema de gestión de tokens', en: 'Token management system' },
      role: { es: 'Full-Stack', en: 'Full-Stack' },
      summary: {
        es: 'Sistema web de tokens virtuales para un ecosistema cerrado, usado para asignar, transferir y acumular unidades de valor entre usuarios de una empresa.',
        en: 'A web system of virtual tokens for a closed ecosystem, used to assign, transfer and accumulate units of value among a company’s users.',
      },
      highlights: {
        es: [
          'Roles de administrador y usuario con paneles diferenciados.',
          'Creación de tipos de token, generación y supervisión de la circulación.',
          'Transferencia y recepción de tokens entre usuarios.',
        ],
        en: [
          'Administrator and user roles with dedicated panels.',
          'Creation of token types, issuance and supervision of circulation.',
          'Transfer and reception of tokens between users.',
        ],
      },
      technologies: [TECH.php, TECH.mysql, TECH.javascript, TECH.html, TECH.css, TECH.bootstrap],
    },
    {
      id: 'municipal',
      context: 'freelance',
      image: 'assets/images/comuni.png',
      title: { es: 'Sistema de gestión municipal', en: 'Municipal management system' },
      role: { es: 'Full-Stack', en: 'Full-Stack' },
      summary: {
        es: 'Plataforma de comunicación y gestión de tareas para una jerarquía municipal, con mensajería interna e informes de gestión por rol.',
        en: 'A communication and task-management platform for a municipal hierarchy, with internal messaging and per-role management reports.',
      },
      highlights: {
        es: [
          'Roles jerárquicos: empleado, director, secretario y ejecutivo.',
          'Mensajería interna con seguimiento de lectura y búsqueda.',
          'Administración de usuarios e informes de gestión.',
        ],
        en: [
          'Hierarchical roles: employee, director, secretary and executive.',
          'Internal messaging with read tracking and search.',
          'User administration and management reports.',
        ],
      },
      technologies: [TECH.php, TECH.mysql, TECH.javascript, TECH.html, TECH.css, TECH.bootstrap],
    },
    {
      id: 'genetic-agents',
      context: 'academic',
      featured: true,
      image: 'assets/images/paper.png',
      title: { es: 'Agentes de IA para videojuegos arcade', en: 'AI agents for arcade games' },
      role: { es: 'Investigador y desarrollador', en: 'Researcher & developer' },
      summary: {
        es: 'Algoritmos genéticos y aprendizaje automático (NEAT) para entrenar agentes autónomos que aprenden a jugar videojuegos arcade.',
        en: 'Genetic algorithms and machine learning (NEAT) to train autonomous agents that learn to play arcade games.',
      },
      highlights: {
        es: [
          'Evolución de redes neuronales con NEAT para que el agente aprenda por sí mismo.',
          'Presentado en el congreso CoNaIISI 2023.',
          'Distinguido como el mejor proyecto en la categoría de estudiantes.',
        ],
        en: [
          'Neural-network evolution with NEAT so the agent learns on its own.',
          'Presented at the CoNaIISI 2023 conference.',
          'Awarded best project in the student category.',
        ],
      },
      technologies: [TECH.python, TECH.neat, TECH.pygame, TECH.pandas],
      links: [
        { label: { es: 'Demo', en: 'Demo' }, url: 'https://www.youtube.com/embed/0kaCRvTS7pk', icon: 'bi-play-circle' },
        { label: { es: 'Paper', en: 'Paper' }, url: 'https://drive.google.com/file/d/1_jUFnnkpLlqgOzBGHJjQl9cZzdV61M-1/view', icon: 'bi-file-earmark-text' },
        { label: { es: 'Código', en: 'Code' }, url: 'https://github.com/JoaquinBetes/ProyectoAlgoritmosGeneticos', icon: 'bi-github' },
      ],
    },
    {
      id: 'tattoo-studio',
      context: 'academic',
      image: 'assets/images/tattoo.png',
      title: { es: 'Gestión de estudio de tatuajes', en: 'Tattoo studio management' },
      role: { es: 'Full-Stack', en: 'Full-Stack' },
      summary: {
        es: 'Aplicación web integral para administrar turnos, clientes, diseños, liquidaciones de sueldos e informes de ingresos de un estudio de tatuajes.',
        en: 'A full web app to manage appointments, clients, designs, payroll settlements and income reports for a tattoo studio.',
      },
      highlights: {
        es: [
          'Gestión de usuarios y roles (clientes, tatuadores, encargado) con autenticación.',
          'Liquidación automática de comisiones y gráficos de ingresos.',
          'Reglas de negocio: estados de diseños, precios, penalizaciones y notificaciones por email.',
        ],
        en: [
          'User and role management (clients, artists, manager) with authentication.',
          'Automatic commission settlement and income charts.',
          'Business rules: design states, pricing, penalties and email notifications.',
        ],
      },
      technologies: [TECH.angular, TECH.typescript, TECH.node, TECH.express, TECH.mikroorm, TECH.mysql],
      links: [
        { label: { es: 'Frontend', en: 'Frontend' }, url: 'https://github.com/JoaquinBetes/FrontendEstudioTatuaje', icon: 'bi-github' },
        { label: { es: 'Backend', en: 'Backend' }, url: 'https://github.com/JoaquinBetes/estudioTatuajes', icon: 'bi-github' },
      ],
    },
    {
      id: 'academic-management',
      context: 'academic',
      image: 'assets/images/academia.png',
      title: { es: 'Sistema de gestión académica', en: 'Academic management system' },
      role: { es: 'Full-Stack', en: 'Full-Stack' },
      summary: {
        es: 'Sistema en arquitectura de tres capas para administrar alumnos, profesores, materias y cursos, con inscripciones, notas y reportes.',
        en: 'A three-tier system to manage students, teachers, subjects and courses, with enrollment, grading and reports.',
      },
      highlights: {
        es: [
          'CRUD completo de las entidades académicas e inscripciones con control de cupos.',
          'Arquitectura en capas para separar presentación, lógica y datos.',
          'Generación de reportes en PDF con QuestPDF.',
        ],
        en: [
          'Full CRUD of academic entities and enrollment with seat control.',
          'Layered architecture separating presentation, logic and data.',
          'PDF report generation with QuestPDF.',
        ],
      },
      technologies: [TECH.csharp, TECH.dotnet, TECH.sqlserver],
      links: [
        { label: { es: 'Repositorio', en: 'Repository' }, url: 'https://github.com/JoaquinBetes/Academia', icon: 'bi-github' },
      ],
    },
    {
      id: 'ticket-sales',
      context: 'academic',
      image: 'assets/images/ventaentradas.png',
      title: { es: 'Sistema de venta de entradas', en: 'Ticket sales system' },
      role: { es: 'Full-Stack', en: 'Full-Stack' },
      summary: {
        es: 'Plataforma para gestionar la venta de entradas a shows organizados por productoras, con validación por escaneo de entradas.',
        en: 'A platform to manage ticket sales for shows run by promoters, with ticket-scan validation.',
      },
      highlights: {
        es: [
          'Compra de entradas por usuarios registrados y administración de eventos.',
          'Eventos organizados por artista, lugar, ciudad y provincia.',
          'Validación de entradas en tiempo real mediante escaneo.',
        ],
        en: [
          'Ticket purchase by registered users and event administration.',
          'Events organized by artist, venue, city and province.',
          'Real-time ticket validation via scanning.',
        ],
      },
      technologies: [TECH.java, TECH.mysql, TECH.javascript, TECH.bootstrap],
      links: [
        { label: { es: 'Repositorio', en: 'Repository' }, url: 'https://github.com/GinoBartolucci/JAVA-acceso_libre', icon: 'bi-github' },
      ],
    },
    {
      id: 'tattoo-artist-site',
      context: 'freelance',
      image: 'assets/images/tattood.png',
      title: { es: 'Web para profesional del tatuaje', en: 'Tattoo artist website' },
      role: { es: 'Frontend', en: 'Frontend' },
      summary: {
        es: 'Sitio para una tatuadora de Rosario: portafolio, información y contacto, con integración de Google Maps y Street View.',
        en: 'A website for a tattoo artist in Rosario: portfolio, info and contact, integrating Google Maps and Street View.',
      },
      highlights: {
        es: [
          'Galería de trabajos y secciones de información y servicios.',
          'Ubicación del estudio con Google Maps y vista 360° (Street View).',
          'Formulario de contacto para consultas y reservas.',
        ],
        en: [
          'Work gallery plus info and services sections.',
          'Studio location with Google Maps and 360° Street View.',
          'Contact form for inquiries and bookings.',
        ],
      },
      technologies: [TECH.html, TECH.css, TECH.javascript, TECH.googlemaps, TECH.bootstrap],
    },
    {
      id: 'portfolio',
      context: 'personal',
      image: 'assets/images/portfolio.png',
      title: { es: 'Este portfolio', en: 'This portfolio' },
      role: { es: 'Diseño & Frontend', en: 'Design & Frontend' },
      summary: {
        es: 'Portfolio personal responsive y bilingüe, con tema claro/oscuro, construido con Angular y desplegado en GitHub Pages.',
        en: 'A responsive, bilingual personal portfolio with light/dark theme, built with Angular and deployed on GitHub Pages.',
      },
      highlights: {
        es: [
          'Arquitectura modular con componentes standalone y signals.',
          'Internacionalización ES/EN y tema persistente en el navegador.',
          'Build estático optimizado para GitHub Pages.',
        ],
        en: [
          'Modular architecture with standalone components and signals.',
          'ES/EN internationalization and a theme persisted in the browser.',
          'Static build optimized for GitHub Pages.',
        ],
      },
      technologies: [TECH.angular, TECH.typescript, TECH.bootstrap, TECH.html, TECH.css],
      links: [
        { label: { es: 'Repositorio', en: 'Repository' }, url: 'https://github.com/JoaquinBetes/joaquin_betes_portfolio', icon: 'bi-github' },
      ],
    },
  ];

  getSkillGroups(): SkillGroup[] {
    return this.skillGroups;
  }

  getSoftSkills(): SoftSkill[] {
    return this.softSkills;
  }

  getExperience(): ExperienceItem[] {
    return this.experience;
  }

  getEducation(): EducationItem[] {
    return this.education;
  }

  getProjects(): Project[] {
    return this.projects;
  }

  /**
   * Curated, ordered list of technologies offered as project filters.
   * Only techs actually present in projects are kept, to avoid empty results.
   */
  getProjectFilters(): Technology[] {
    const order = ['typescript', 'python', 'csharp', 'dotnet', 'angular', 'node', 'vercelai', 'n8n', 'llm', 'java', 'php'];
    const byName = new Map<string, Technology>();
    for (const project of this.projects) {
      for (const tech of project.technologies) {
        if (!byName.has(tech.name)) {
          byName.set(tech.name, tech);
        }
      }
    }
    return order
      .map((name) => byName.get(name))
      .filter((tech): tech is Technology => tech !== undefined);
  }
}
