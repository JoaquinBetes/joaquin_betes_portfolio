# Portfolio — Joaquín Betes

Portfolio personal de **Joaquín Betes**, Full-Stack Developer & IA, orientado a Ciencia de Datos.
Aplicación web estática, bilingüe (ES/EN) y con tema claro/oscuro.

🔗 **En vivo:** [joaquinbetes.github.io/joaquin_betes_portfolio](https://joaquinbetes.github.io/joaquin_betes_portfolio/)

## Tecnologías

- **Angular 19** (componentes _standalone_, _signals_, control-flow `@if`/`@for`).
- **TypeScript** en modo `strict`.
- **Bootstrap 5** (grid + componentes JS) sobre un _design system_ propio con _custom properties_.
- **SCSS** con tokens de color por tema.
- **Bootstrap Icons**.

## Características

- **Bilingüe (ES/EN)** con cambio de idioma en tiempo real y preferencia persistida.
- **Tema oscuro/claro** persistido en el navegador, aplicado antes del primer render para evitar parpadeo.
- **Secciones:** Sobre mí, Experiencia, Habilidades, Proyectos (con filtros y modal de detalle), Formación y Contacto.
- **Micro-interacciones** con animaciones al hacer scroll (`IntersectionObserver`), respetando `prefers-reduced-motion`.
- **Contenido tipado**: experiencia, formación y proyectos viven como datos en `PortfolioService` (sin `innerHTML`).

## Estructura

```
src/app/
├── interfaces/      # tipos (i18n + modelos de dominio)
├── i18n/            # diccionario de textos de UI (ES/EN)
├── services/        # PortfolioService (datos), ThemeService, LanguageService
├── directives/      # reveal-on-scroll
├── shared/          # componente reutilizable tech-chip
└── <secciones>/     # header, profile, about-me, experience, skills,
                     # proyects (+ cards y modal), education, contact, footer
```

## Desarrollo

```bash
npm install
npm start          # http://localhost:4200/
```

## Build y despliegue (GitHub Pages)

El proyecto se compila como SPA estática (sin SSR). El `baseHref` está configurado para el subpath del repositorio.

```bash
npm run build      # genera dist/portfolio_betes_joaquin/browser
npm run deploy     # build + publica en la rama gh-pages con angular-cli-ghpages
```

`public/404.html` actúa como _fallback_ para que GitHub Pages sirva la aplicación ante rutas desconocidas.

## Licencia

Proyecto personal. El código se publica bajo Licencia MIT.
