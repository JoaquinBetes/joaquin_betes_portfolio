import { Localized } from '../interfaces/i18n';

/**
 * UI string dictionary. Long-form content (bio, project/experience copy)
 * lives in PortfolioService as localized data; this holds labels, titles
 * and short UI strings.
 */
export const UI: Record<string, Localized> = {
  // Navigation
  'nav.about': { es: 'Sobre mí', en: 'About' },
  'nav.experience': { es: 'Experiencia', en: 'Experience' },
  'nav.skills': { es: 'Habilidades', en: 'Skills' },
  'nav.projects': { es: 'Proyectos', en: 'Projects' },
  'nav.education': { es: 'Formación', en: 'Education' },
  'nav.contact': { es: 'Contacto', en: 'Contact' },
  'nav.menu': { es: 'Abrir menú', en: 'Open menu' },
  'nav.toggleTheme': { es: 'Cambiar tema', en: 'Toggle theme' },
  'nav.toggleLang': { es: 'Cambiar idioma', en: 'Switch language' },

  // Hero
  'hero.greeting': { es: 'Hola, soy', en: "Hi, I'm" },
  'hero.role': { es: 'Full-Stack Developer & IA', en: 'Full-Stack Developer & AI' },
  'hero.tagline': {
    es: 'Construyo backends, productos web y soluciones de IA, con la mirada puesta en los datos.',
    en: 'I build backends, web products and AI solutions, with a focus on data.',
  },
  'hero.cta.projects': { es: 'Ver proyectos', en: 'View projects' },
  'hero.cta.contact': { es: 'Contacto', en: 'Get in touch' },
  'hero.fact.role': { es: 'Backend .NET · IA', en: '.NET Backend · AI' },
  'hero.fact.location': { es: 'Rosario, Argentina', en: 'Rosario, Argentina' },
  'hero.fact.aus': { es: 'Analista en Sistemas · UTN', en: 'Systems Analyst · UTN' },
  'hero.fact.study': { es: 'Ciencia de Datos · UGR', en: 'Data Science · UGR' },

  // About
  'about.eyebrow': { es: 'Sobre mí', en: 'About me' },
  'about.title': { es: 'Del análisis a los datos', en: 'From analysis to data' },
  'about.p1': {
    es: 'Soy Analista Universitario de Sistemas (UTN Rosario) y cursé cuatro años de la Licenciatura en Física, una combinación que me dio una base sólida en pensamiento analítico y resolución de problemas. Vivo en Rosario, Argentina.',
    en: "I'm a University Systems Analyst (UTN Rosario) and studied four years of a Physics degree, a mix that gave me a solid foundation in analytical thinking and problem solving. I'm based in Rosario, Argentina.",
  },
  'about.p2': {
    es: 'Me especializo en desarrollo backend .NET y en soluciones de IA: asistentes con LLMs, automatizaciones y flujos de procesamiento de datos. En paralelo inicié la Licenciatura en Ciencia de Datos en la Universidad del Gran Rosario (UGR), el rumbo hacia el que oriento mi carrera.',
    en: 'I specialize in .NET backend development and AI solutions: LLM-powered assistants, automations and data-processing pipelines. In parallel I started a Data Science degree at Universidad del Gran Rosario (UGR), the direction I am steering my career toward.',
  },
  'about.p3': {
    es: 'Mi formación bilingüe me permite trabajar con equipos y documentación internacionales y aprender de forma continua.',
    en: 'My bilingual background lets me work with international teams and documentation and keep learning continuously.',
  },
  'about.now': { es: 'Ahora mismo', en: 'Right now' },
  'about.now.work': { es: 'Desarrollo Backend .NET & IA', en: '.NET Backend & AI development' },
  'about.now.aus': { es: 'Analista Universitario en Sistemas (UTN)', en: 'University Systems Analyst (UTN)' },
  'about.now.study': { es: 'Ciencia de Datos en la UGR', en: 'Data Science at UGR' },
  'about.now.location': { es: 'Rosario, Argentina', en: 'Rosario, Argentina' },
  'about.now.lang': { es: 'Español / Inglés', en: 'Spanish / English' },

  // Experience
  'experience.eyebrow': { es: 'Trayectoria', en: 'Career' },
  'experience.title': { es: 'Experiencia', en: 'Experience' },

  // Skills
  'skills.eyebrow': { es: 'Stack', en: 'Stack' },
  'skills.title': { es: 'Habilidades técnicas', en: 'Technical skills' },
  'skills.lead': {
    es: 'Tecnologías con las que trabajo a diario, organizadas por área.',
    en: 'Technologies I work with day to day, grouped by area.',
  },
  'skills.soft.title': { es: 'Habilidades blandas', en: 'Soft skills' },

  // Projects
  'projects.eyebrow': { es: 'Trabajo', en: 'Work' },
  'projects.title': { es: 'Proyectos', en: 'Projects' },
  'projects.lead': {
    es: 'Una selección de proyectos profesionales, académicos y personales.',
    en: 'A selection of professional, academic and personal projects.',
  },
  'projects.filter.label': { es: 'Filtrar', en: 'Filter' },
  'projects.filter.all': { es: 'Todos', en: 'All' },
  'projects.showMore': { es: 'Mostrar más', en: 'Show more' },
  'projects.showLess': { es: 'Mostrar menos', en: 'Show less' },
  'projects.viewMore': { es: 'Ver detalle', en: 'View details' },
  'projects.close': { es: 'Cerrar', en: 'Close' },
  'projects.highlights': { es: 'Destacados', en: 'Highlights' },
  'projects.technologies': { es: 'Tecnologías', en: 'Technologies' },
  'projects.empty': {
    es: 'No hay proyectos con ese filtro.',
    en: 'No projects match that filter.',
  },
  'context.work': { es: 'Profesional', en: 'Professional' },
  'context.freelance': { es: 'Freelance', en: 'Freelance' },
  'context.academic': { es: 'Académico', en: 'Academic' },
  'context.personal': { es: 'Personal', en: 'Personal' },

  // Education
  'education.eyebrow': { es: 'Formación', en: 'Education' },
  'education.title': { es: 'Formación académica', en: 'Education' },

  // Contact
  'contact.eyebrow': { es: 'Contacto', en: 'Contact' },
  'contact.title': { es: 'Trabajemos juntos', en: "Let's work together" },
  'contact.lead': {
    es: '¿Tenés un proyecto en mente o una oportunidad? Escribime, respondo rápido.',
    en: 'Have a project in mind or an opportunity? Reach out, I reply quickly.',
  },
  'contact.cta': { es: 'Enviar email', en: 'Send an email' },

  // Footer
  'footer.built': {
    es: 'Diseñado y desarrollado con Angular.',
    en: 'Designed and built with Angular.',
  },
};
