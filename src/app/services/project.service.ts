import { Injectable } from '@angular/core';
import { Technology } from '../interfaces/technology.interface.js';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private technologies: Technology[] = [
    { name: 'Angular', icon:"/joaquin_betes_portfolio/assets/icons/angular.svg"},
    { name: 'JavaScript', icon:"/joaquin_betes_portfolio/assets/icons/js.svg" },
    { name: 'Java', icon:"/joaquin_betes_portfolio/assets/icons/java.png" },
    { name: 'PHP', icon:"/joaquin_betes_portfolio/assets/icons/php.svg" },
    { name: 'React', icon:"/joaquin_betes_portfolio/assets/icons/react.svg" },
    { name: 'TypeScript', icon:"/joaquin_betes_portfolio/assets/icons/ts.png" },
    { name: 'MikroORM', icon:"/joaquin_betes_portfolio/assets/icons/mikroorm.svg" },
    { name: 'Node', icon:"/joaquin_betes_portfolio/assets/icons/node.png" },
    { name: 'ExpressJs', icon:"/joaquin_betes_portfolio/assets/icons/expressjs.svg" },
    { name: 'Python', icon:"/joaquin_betes_portfolio/assets/icons/python.svg" },
    { name: 'Pandas', icon:"/joaquin_betes_portfolio/assets/icons/pandas.png" },
    { name: 'NET', icon:"/joaquin_betes_portfolio/assets/icons/.NET.svg" },
    { name: 'Csharp', icon:"/joaquin_betes_portfolio/assets/icons/csharp.svg" },
    { name: 'HTML', icon:"/joaquin_betes_portfolio/assets/icons/html.svg" },
    { name: 'CSS', icon:"/joaquin_betes_portfolio/assets/icons/css.svg" },
    { name: 'Bootstrap', icon:"/joaquin_betes_portfolio/assets/icons/bootstrap.png" },
    { name: 'MySQL', icon:"/joaquin_betes_portfolio/assets/icons/mysql.png" },
    { name: 'SQLServer', icon:"/joaquin_betes_portfolio/assets/icons/sqlserver.png" },
    { name: 'MongoDB', icon:"/joaquin_betes_portfolio/assets/icons/mongodb.svg" },
    { name: 'GitHub', icon:"/joaquin_betes_portfolio/assets/icons/github.svg" },
    { name: 'Git', icon:"/joaquin_betes_portfolio/assets/icons/git.svg" },
    { name: 'GoogleMapsAPI', icon:"/joaquin_betes_portfolio/assets/icons/googlemaps.png" },
    
  ];

  selectTech(techName: string): Technology{
    const tech = this.technologies.find(tech => tech.name === techName);
    if (!tech) {
      throw new Error(`Technology "${techName}" not found.`);
    }
    return tech;
  }

  private projects = [
    { title: 'Sistema de gestión de estudio de tatuadores', role:"Fullstack",
       description: `
  <section id="academic-management-system">
    <div class="container">
      <div class="p-1">
        <p>
          Aplicación web integral diseñada para la gestión y automatización de las operaciones de un estudio de tatuajes. 
          Proporciona funcionalidades para la administración de turnos, clientes, diseños, tatuadores y políticas del estudio, 
          además de liquidaciones mensuales de sueldos y generación de gráficos e informes de ingresos al estudio.
        </p>
      </div>
    <hr>
    <h3>Frontend</h3>
    <ul>
      <li>Interfaz de usuario intuitiva para clientes, tatuadores y encargado.</li>
      <li>Secciones dinámicas para la visualización de tatuajes/diseños, filtros por categorías y gestión de turnos.</li>
      <li>Formularios para registro, reservas y gestión de datos personales.</li>
      <li>
        Gráficos interactivos e informes visuales de ingresos por comisiones mensuales y por tatuador 
        utilizando <strong>API Google Charts</strong>.
      </li>
    </ul>
      <div class="link d-flex justify-content-center">
        <a href="https://github.com/JoaquinBetes/FrontendEstudioTatuaje" target="_blank" class="btn btn-primary">
          Ver Repositorio
        </a>
      </div>
      <hr>
      <h2>Backend</h2>
      <ul>
        <li>Gestión de usuarios, roles y autenticación (clientes, tatuadores, encargado).</li>
        <li>Notificaciones por correo electrónico para confirmaciones y recordatorios.</li>
        <li>Lógica de liquidación automática para los tatuadores.</li>
        <li>Gestión de reglas de negocio (estados de diseños, cálculo de precios, penalizaciones, etc.).</li>
      </ul>
      <div class="link d-flex justify-content-center">
        <a href="https://github.com/JoaquinBetes/estudioTatuajes" target="_blank" class="btn btn-primary">
          Ver Repositorio
        </a>
      </div>
      <hr>
    </div>
  </section>
`,
     image: '/joaquin_betes_portfolio/assets/images/tattoo.png', technologies: [this.selectTech('Angular'), this.selectTech('TypeScript'), this.selectTech('MikroORM'), this.selectTech('MySQL'), this.selectTech('Node'), this.selectTech('ExpressJs') ] },
    { title: 'Sistema de gestión académica', role:"Fullstack",
       description: `
  <section id="academic-management-system">
    <div class="container">
      <div>
        <strong>El Sistema de Gestión Académica (SGA)</strong> registra y administra las actividades académicas de la universidad en torno a las entidades principales de Alumnos, Profesores, Materias y Cursos. 
        Proporciona funcionalidades clave como inscripciones, gestión de usuarios y reportes, garantizando la automatización y organización de las operaciones académicas.
      </div>

      <hr style="margin: 20px 0;">

      <h3>Funcionalidades principales</h3>
      <ul>
        <li>Alta, Baja, Modificaciones y Consulta de Usuarios, Alumnos, Especialidades, Profesores, Planes y Materias, Comisiones y Cursos.</li>
        <li>Inscripciones de Alumnos a Cursos con control de cupos disponibles.</li>
        <li>Registro de notas y asignación de docentes a cursos.</li>
        <li>Generación de reportes para Cursos, Planes, Especialidades y Usuarios.</li>
      </ul>

      <hr style="margin: 20px 0;">

      <h3>Metodología</h3>
      <p>
        <strong>Arquitectura de capas:</strong> El sistema utiliza una arquitectura en tres capas (capa de presentación, lógica de negocio y datos), 
        proporcionando beneficios como separación de responsabilidades, escalabilidad, reutilización de código y mantenibilidad.
      </p>

      <h4>Ventajas</h4>
      <ul>
        <li><strong>Separación de responsabilidades:</strong> Permite una estructura clara y fácil de mantener.</li>
        <li><strong>Escalabilidad:</strong> Cada capa puede adaptarse a las necesidades del sistema.</li>
        <li><strong>Reutilización de código:</strong> Facilita el uso compartido de lógica y datos entre componentes.</li>
        <li><strong>Mantenibilidad:</strong> Reduce el riesgo de errores y simplifica las actualizaciones.</li>
      </ul>

      <hr style="margin: 20px 0;">

      <h3>Tecnologías utilizadas</h3>
      <ul>
        <li><strong>.NET 7.0:</strong> Plataforma de desarrollo robusta y versátil.</li>
        <li><strong>Windows Forms:</strong> Interfaz de usuario rica y funcional para aplicaciones de escritorio.</li>
        <li><strong>ADO.NET:</strong> Acceso y manipulación de datos desde aplicaciones .NET.</li>
        <li><strong>Quest PDF:</strong> Generación de reportes en PDF.</li>
      </ul>

      <hr>

      <h3>Modelo de datos</h3>
        <p>El sistema incluye un modelo de datos que organiza y relaciona Alumnos, Profesores, Materias, Cursos, Planes y Especialidades, 
        asegurando una estructura lógica y funcional para la gestión académica.</p>
      <div class="image-wrapper">
        <img src="assets/images/mdacademia.png" class="image-wrapper" alt="Modelo datos">
      </div>

      <hr>

      <h3>Pantallas principales</h3>
      <h3>Interfaz de escritorio</h3>
      <ul>
        <li>Cargar notas a los alumnos.</li>
        <li>Asignar docentes a cursos.</li>
        <li>Inscripciones de alumnos a cursos.</li>
        <li>CRUD (Crear, Leer, Actualizar, Eliminar).</li>
      </ul>

      <h3>Interfaz web</h3>
      <ul>
        <li>Página principal.</li>
        <li>Consulta de usuarios.</li>
        <li>Alta de usuarios.</li>
        <li>Informes de especialidades y usuarios.</li>
      </ul>

      <hr>

      <h3>Enlaces</h3>
      <p>
        El proyecto y el script para generar la base de datos están disponibles en el siguiente enlace: 
        <a href="https://github.com/JoaquinBetes/Academia" target="_blank">https://github.com/JoaquinBetes/Academia</a>
      </p>
      <hr>
    </div>
  </section>

`
       , image: '/joaquin_betes_portfolio/assets/images/academia.png', technologies: [this.selectTech('Csharp'), this.selectTech('NET'), this.selectTech('SQLServer')] },
    { title: 'Entrenamiento agentes IA para Breakout', role:"Investigador y desarrollador", 
      description: `
      <section id="proyecto">
        <div class="container">
          <h4 class="text-center mb-4">Algoritmos Genéticos y Técnicas de Aprendizaje Automático para el Entrenamiento de Agentes Inteligentes en Videojuegos Arcade</h2>
        
          <p>
            Este proyecto consiste en el uso de Algoritmos Genéticos (GA) y Técnicas de Aprendizaje Automático para el entrenamiento de Agentes Inteligentes en videojuegos arcade. Se aplican técnicas de optimización y evolución para crear agentes autónomos capaces de aprender y adaptarse a su entorno.
          </p>
          <hr style="margin: 20px 0;">
          <div>
            <h3>Tecnologías Utilizadas:</h3>
            <ul>
              <li><strong>Python</strong>: Lenguaje de programación principal para el desarrollo del proyecto.</li>
              <li><strong>PyGame</strong>: Framework para el desarrollo de videojuegos.</li>
              <li><strong>Pickle</strong>: Biblioteca para la serialización de objetos en Python.</li>
              <li><strong>Pandas</strong>: Librería para el análisis y manejo de datos en Python.</li>
              <li><strong>NEAT</strong>: Algoritmo para la evolución de redes neuronales en tareas complejas como el aprendizaje automático.</li>
            </ul>
          </div>
          <hr style="margin: 20px 0;">

          <div class="link d-flex justify-content-center w-100">
            <a href="https://www.youtube.com/embed/0kaCRvTS7pk?si=_HNdxgS37C05vqUd" target="_blank" class="btn btn-primary m-2 w-100 h-40">
              Demo
            </a>
          </div>

          <hr style="margin: 20px 0;">
          <div class="project-info">
            <h3>Detalles del Proyecto:</h3>
            <ul>
              <li>Proyecto presentado al Congreso Nacional de Ingeniería Informática / Sistemas de Información (CoNaIISI) en 2023.</li>
              <li>Distinguido como el mejor proyecto dentro de la categoría correspondiente a estudiantes.</li>
            </ul>
          </div>
          <div class="link d-flex justify-content-center">
            <a href="https://drive.google.com/file/d/1_jUFnnkpLlqgOzBGHJjQl9cZzdV61M-1/view" target="_blank" class="btn btn-primary m-2">
              Ver Paper
            </a>
            <a href="https://drive.google.com/file/d/1-87yJt0URDw9362hTF7lcSV9huMyGF2v/view?usp=sharing" target="_blank" class="btn btn-primary m-2">
              Ver Informe
            </a>
          </div>
          <div class="link d-flex justify-content-center">
            <a href="https://docs.google.com/presentation/d/1fN2qoq6lukmax16vR6Z3gllDTkd34CIa/edit?usp=sharing&ouid=107201921861823553577&rtpof=true&sd=true" target="_blank" class="btn btn-primary m-2">
              Ver PPT
            </a>
            <a href="https://github.com/JoaquinBetes/ProyectoAlgoritmosGeneticos" target="_blank" class="btn btn-primary m-2">
              Ver Código
            </a>
          </div>
          <hr style="margin: 20px 0;">
        </div>
      </section>
 `, image: '/joaquin_betes_portfolio/assets/images/paper.png', technologies: [this.selectTech('Python'), this.selectTech('Pandas')] },
    { title: 'Sistema de Venta de entradas', role:"Fullstack", 
      description:
      `
      <section id="sistema-venta-entradas">
        <div class="container">
          <p>
            Este sistema gestiona la venta de entradas para shows organizados por una productora, permitiendo a los usuarios registrados comprarlas y a las productoras administrar sus eventos. 
            Los shows están asociados a un artista, un lugar, una ciudad y una provincia. Incluye la funcionalidad de escaneo de entradas para validar su uso.
          </p>
          <p>Proyecto desarrollado para la cátedra <strong>JAVA</strong>.</p>
          <hr style="margin: 20px 0;">
          <div class="technologies">
            <h3>Tecnologías Utilizadas:</h3>
            <ul>
              <li><strong>Java</strong>: Lenguaje de programación principal del proyecto.</li>
              <li><strong>Java Servlet</strong>: Para la gestión de peticiones en el servidor.</li>
              <li><strong>MySQL</strong>: Base de datos utilizada para almacenar la información.</li>
              <li><strong>JSP</strong>: Tecnología para la creación de vistas dinámicas en el servidor.</li>
              <li><strong>JavaScript</strong>: Implementado en el frontend para lógica de filtrado de ciudades y búsquedas.</li>
              <li><strong>Bootstrap</strong>: Framework CSS para diseño responsivo y estético.</li>
            </ul>
          </div>
          <hr style="margin: 20px 0;">
          <div class="project-info">
            <h3>Detalles del Proyecto:</h3>
            <ul>
              <li>Gestiona la venta de entradas para eventos organizados por productoras.</li>
              <li>Permite a los usuarios registrados comprar entradas y gestionar sus reservas.</li>
              <li>Incluye funcionalidad de escaneo de entradas para validación en tiempo real.</li>
              <li>Los eventos están organizados por artista, lugar, ciudad y provincia.</li>
            </ul>
          </div>

          <div class="link d-flex justify-content-center">
            <a href="https://github.com/GinoBartolucci/JAVA-acceso_libre" target="_blank" class="btn btn-primary">
              Ver Repositorio
            </a>
          </div>
        </div>
        <hr style="margin: 20px 0;">
      </section>
      `, image: '/joaquin_betes_portfolio/assets/images/ventaentradas.png', technologies: [this.selectTech('Java'), this.selectTech('MySQL'), this.selectTech('JavaScript'), this.selectTech('Bootstrap')] },
    { title: 'Administración inmobiliaria', role:"Frontend", description: 
      `
      <section id="gestion-inmobiliaria">
      <div class="container">
        <p>
          Esta aplicación web fue diseñada para facilitar la administración de propiedades, alquileres y la comunicación entre inquilinos, propietarios y el administrador general de la inmobiliaria. Ofrece funcionalidades específicas según el rol del usuario, garantizando una experiencia eficiente y personalizada.
        </p>
        <hr style="margin: 20px 0;">
        <div class="technologies">
          <h3>Tecnologías Utilizadas:</h3>
          <ul>
            <li><strong>HTML, CSS y JavaScript</strong>: Para la creación de una interfaz de usuario responsiva y moderna.</li>
            <li><strong>PHP</strong>: Gestión de la lógica del negocio en el servidor.</li>
            <li><strong>MySQL</strong>: Almacenamiento y administración de datos relacionales.</li>
            <li><strong>Bootstrap</strong>: Framework CSS para diseño responsivo y estético.</li>
          </ul>
        </div>
        <hr style="margin: 20px 0;">
        <div class="project-info">
          <h3>Detalles del Proyecto:</h3>
          <ul>
            <li>Gestión de propiedades, inquilinos y propietarios con roles diferenciados.</li>
            <li>Panel del administrador para supervisar pagos, propiedades y usuarios.</li>
            <li>Panel del propietario para revisar deudas de inquilinos y recibir tickets de pago.</li>
            <li>Panel del inquilino para consultar deudas, descargar comprobantes y enviar mensajes.</li>
            <li>Sistema de notificaciones automáticas para pagos vencidos y mensajes nuevos.</li>
            <li>Flujo de trabajo optimizado para la carga y validación de comprobantes de pago.</li>
          </ul>
        </div>
      </div>
      <hr style="margin: 20px 0;">
    </section>
      `
      , image: '/joaquin_betes_portfolio/assets/images/inmobiliaria.png', technologies: [ this.selectTech('JavaScript'), this.selectTech('PHP'), this.selectTech('MySQL'), this.selectTech('HTML'), this.selectTech('CSS')], work: "yes" },
    { title: 'Sistema de gestión de Tokens', role:"Fullstack", description:
       `
       <section id="sistema-tokens-virtuales">
        <div class="container">
          <p>
            Este sistema web fue diseñado para la administración, gestión, y creación de tokens virtuales, utilizados por una empresa como herramienta interna para asignar, transferir y acumular puntos entre empleados. A diferencia de las criptomonedas tradicionales, los tokens aquí representados funcionan como unidades de valor dentro de un ecosistema cerrado, adaptables a diversas necesidades corporativas.
          <p>La aplicación divide sus funcionalidades entre dos tipos de usuarios principales: <b>administradores</b> y <b>usuarios estándar</b>.</p>

          </p>
          <hr style="margin: 20px 0;">
          <div class="project-info">
            <h5>Funciones del Administrador:</h5>
            <p>El administrador tiene acceso a un panel completo que le permite gestionar y supervisar los tokens en circulación.</p>
            <ul>
              <li><strong>Creación de Nuevos Tipos de Tokens:</strong> Agregar nuevas categorías de tokens según las necesidades específicas de la empresa.</li>
              <li><strong>Generación de Tokens:</strong> Emitir una cantidad específica de cualquier tipo de token existente.</li>
              <li><strong>Panel de Supervisión:</strong>Visualizar la cantidad total de cada tipo de token actualmente en circulación, proporcionando una visión general del sistema.</li>
            </ul>
            <hr style="margin: 20px 0;">
            <h5>Funciones del Usuario:</h5>
            <p>Los usuarios estándar tienen un enfoque práctico para interactuar con los tokens.</p>
            <ul>
              <li><strong>Visualización de Tokens:</strong> Consultar la cantidad y tipos de tokens que poseen en su cuenta personal.</li>
              <li><strong>Transferencia de Tokens:</strong> Enviar tokens a otros usuarios dentro del sistema, fomentando la interacción y el intercambio de recursos.</li>
              <li><strong>Recepción de Tokens:</strong>VAceptar tokens transferidos por otros usuarios.</li>
            </ul>
          </div>
          <hr style="margin: 20px 0;">
          <p>Este sistema no solo simplifica la administración y gestión de tokens virtuales, sino que también promueve la transparencia y la interacción entre los empleados, facilitando un modelo adaptable para múltiples propósitos corporativos.</p>
          <hr style="margin: 20px 0;">
          <div class="technologies">
            <h3>Tecnologías Utilizadas:</h3>
            <ul>
              <li><strong>HTML, CSS, y JavaScript</strong>: Para el diseño y funcionalidad del frontend.</li>
              <li><strong>PHP</strong>: Para la lógica del servidor y gestión de datos.</li>
              <li><strong>MySQL</strong>: Base de datos relacional para almacenar información sobre usuarios, tokens, y transacciones.</li>
              <li><strong>Bootstrap</strong>: Framework CSS para diseño responsivo y estético.</li>
            </ul>
          </div>
        </div>
        <hr style="margin: 20px 0;">
      </section>

       `
       , image: '/joaquin_betes_portfolio/assets/images/tokens.png', technologies: [ this.selectTech('JavaScript'), this.selectTech('PHP'), this.selectTech('MySQL'), this.selectTech('HTML'), this.selectTech('CSS')], work: "yes" },
    { title: 'Web para Profesional del Tatuaje', role:"Frontend", description:
       `
       <section id="pagina-web-tatuadora">
        <div class="container">
          <p>
            Esta página web fue diseñada para una tatuadora en la ciudad de Rosario, con el objetivo de mostrar su portafolio de trabajos y facilitar la interacción con los clientes. La página proporciona una experiencia visual atractiva y funcional, además de integrar la API de <strong>Google Maps</strong> para indicar la ubicación del estudio y ofrecer una vista panorámica con <strong>Street View</strong>.
          </p>
          <hr style="margin: 20px 0;">
          
          <div class="project-info">
            <h5>Funciones Principales de la Página:</h5>
            <p>La página se divide en varias secciones para mejorar la navegación y la experiencia del usuario.</p>
            <ul>
              <li class="mb-2"><strong>Información Personal:</strong> Se presenta información de la tatuadora, su experiencia y los detalles sobre los servicios ofrecidos en su estudio.</li>
              <div class="image-wrapper mb-2">
                <img src="assets/images/info.png" class="image-wrapper" alt="información sobre tatuadora">
              </div>
              <li class="mb-2"><strong>Google Maps Integrado:</strong> Un mapa interactivo de <strong>Google Maps</strong> se utiliza para mostrar la ubicación exacta del estudio, además de permitir la funcionalidad de <strong>Street View</strong> para una vista en 360 grados de la zona.</li>
              <div class="image-wrapper mb-2">
                <img src="assets/images/gmaps.png" class="image-wrapper" alt="google maps">
              </div>
              <li class="mb-2"><strong>Exhibición de Tatuajes:</strong> Una galería de imágenes que muestra el portafolio de trabajos realizados, permitiendo a los usuarios explorar los diferentes estilos y diseños de tatuajes realizados por la artista.</li>
              <div class="image-wrapper mb-2">
                <img src="assets/images/exhibicion.png" class="image-wrapper" alt="seccion de tatuajes">
              </div>
              <li class="mb-2"><strong>Formulario de Contacto:</strong> Un formulario de contacto que permite a los usuarios enviar consultas o solicitar información adicional sobre disponibilidad, precios y otros detalles relacionados con los tatuajes.</li>
              <div class="image-wrapper mb-2">
                <img src="assets/images/form.png" class="image-wrapper" alt="seccion de tatuajes">
              </div>
            </ul>
          </div>

          <hr style="margin: 20px 0;">
          <p>La página no solo cumple la función de informar sobre los servicios de la tatuadora, sino que también facilita la interacción con los usuarios, permitiendo que potenciales clientes encuentren la ubicación fácilmente y se pongan en contacto directamente con ella.</p>
          <hr style="margin: 20px 0;">

          <div class="technologies">
            <h3>Tecnologías Utilizadas:</h3>
            <ul>
              <li><strong>HTML, CSS y JavaScript</strong>: Para la creación de la estructura, diseño y funcionalidades interactivas de la página.</li>
              <li><strong>API de Google Maps</strong>: Para integrar la ubicación del estudio y ofrecer una vista interactiva a través de <strong>Street View</strong>.</li>
              <li><strong>Bootstrap</strong>: Framework CSS utilizado para asegurar que el diseño sea responsivo y visualmente atractivo en todos los dispositivos.</li>
            </ul>
          </div>
        </div>
        <hr style="margin: 20px 0;">
      </section>
       `, image: '/joaquin_betes_portfolio/assets/images/tattood.png', technologies: [ this.selectTech('JavaScript'), this.selectTech('HTML'), this.selectTech('CSS'), this.selectTech('GoogleMapsAPI')] },
    { title: 'Sistema de gestión municipal', role:"Fullstack", description: 
      `
      <section id="sistema-gestion-municipal">
        <div class="container">
          <p>
            Este sistema web fue diseñado para facilitar la <b>comunicación</b> y <b>gestión de tareas</b> dentro de una jerarquía municipal, permitiendo la interacción eficiente entre diferentes niveles de empleados. La aplicación proporciona una <b>plataforma centralizada</b> para el intercambio de mensajes, administración de usuarios y generación de informes dentro de un <b>sistema jerárquico</b>.
          </p>
          <p>La aplicación organiza sus funcionalidades en diferentes roles de usuario, cada uno con permisos específicos para garantizar una comunicación fluida entre los niveles del sistema municipal.</p>
          <hr style="margin: 20px 0;">
          <div class="project-info">
            <h5>Funciones del Empleado:</h5>
            <p>Los empleados tienen acceso a su perfil personal y pueden interactuar con los mensajes de la plataforma.</p>
            <ul>
              <li><strong>Perfil Propio:</strong> El empleado puede ver y gestionar su información personal.</li>
              <li><strong>Mensajes:</strong> Recibe notificaciones de nuevos mensajes y puede ver los hilos, pero no puede responder. Solo se registra cuando un mensaje ha sido visto.</li>
            </ul>
            <hr style="margin: 20px 0;">
            <h5>Funciones del Director:</h5>
            <p>Los directores tienen control sobre los empleados y pueden gestionar la comunicación dentro de su área de responsabilidad.</p>
            <ul>
              <li><strong>Perfil Propio:</strong> Acceso al perfil personal y gestión de su información.</li>
              <li><strong>Administrar Empleados:</strong> Agregar nuevos empleados y dar de baja a los existentes.</li>
              <li><strong>Mensajes:</strong> Los directores gestionan hilos con empleados y secretarios, con la capacidad de crear, editar y enviar mensajes. También pueden ver cuáles hilos han sido leídos.</li>
              <li><strong>Informes de Gestión:</strong> Pueden ver peticiones anteriores y responder a nuevas solicitudes de informes.</li>
            </ul>
            <hr style="margin: 20px 0;">
            <h5>Funciones del Secretario:</h5>
            <p>Los secretarios facilitan la comunicación entre directores y ejecutivos, gestionando también tareas administrativas.</p>
            <ul>
              <li><strong>Perfil Propio:</strong> Los secretarios gestionan su propio perfil.</li>
              <li><strong>Administrar Directores:</strong> Agregan y dan de baja directores dentro del sistema.</li>
              <li><strong>Mensajes:</strong> Pueden crear hilos con directores y administradores, gestionar mensajes directos con otros secretarios y realizar la edición de mensajes.</li>
              <li><strong>Informes de Gestión:</strong> Los secretarios gestionan los informes de los directores y ejecutivos, pudiendo ver hechos anteriores y responder a peticiones de informes.</li>
            </ul>
            <hr style="margin: 20px 0;">
            <h5>Funciones del Ejecutivo:</h5>
            <p>Los ejecutivos gestionan secretarios y supervisan los informes de gestión a nivel superior.</p>
            <ul>
              <li><strong>Perfil Propio:</strong> Los ejecutivos tienen acceso a su perfil personal.</li>
              <li><strong>Administrar Secretarios:</strong> Pueden agregar y dar de baja secretarios.</li>
              <li><strong>Mensajes:</strong> Los ejecutivos gestionan hilos con secretarios y pueden realizar búsquedas avanzadas dentro de los mensajes.</li>
              <li><strong>Informes de Gestión:</strong> Los ejecutivos supervisan los informes de los secretarios y realizan peticiones de informes adicionales.</li>
            </ul>
          </div>
          <hr style="margin: 20px 0;">
          <p>
            Este sistema permite una gestión efectiva de la jerarquía municipal, mejorando la comunicación entre los distintos roles. La aplicación asegura una interacción eficiente, permitiendo a cada usuario gestionar su información y realizar las tareas asignadas de manera clara y estructurada.
          </p>
          <hr style="margin: 20px 0;">
          <div class="technologies">
            <h3>Tecnologías Utilizadas:</h3>
            <ul>
              <li><strong>HTML, CSS y JavaScript</strong>: Para el diseño y funcionalidades del frontend.</li>
              <li><strong>PHP</strong>: Para la lógica del servidor y gestión de datos.</li>
              <li><strong>MySQL</strong>: Base de datos relacional para almacenar información sobre usuarios, mensajes, hilos, informes y transacciones.</li>
              <li><strong>Bootstrap</strong>: Framework CSS para diseño responsivo y estético.</li>
            </ul>
          </div>
        </div>
        <hr style="margin: 20px 0;">
      </section>
      `
      , image: '/joaquin_betes_portfolio/assets/images/comuni.png', technologies: [ this.selectTech('JavaScript'), this.selectTech('PHP'), this.selectTech('MySQL'), this.selectTech('HTML'), this.selectTech('CSS')], work: "yes" },
      { title: 'Portfolio web Joaquín Betes', role:"Frontend", description:
        `
<section id="portfolio-web">
  <div class="container">
    <p>
      Esta página web es interactiva y responsive desarrollada utilizando <strong>Angular</strong>, <strong>TypeScript</strong> y <strong>Bootstrap</strong>, garantizando una arquitectura modular, escalabilidad y un diseño moderno adaptado a diversos dispositivos. Su propósito es ofrecer una plataforma flexible y eficiente para la visualización y organización de proyectos personales.
    </p>

    <hr style="margin: 20px 0;">
    <div class="project-info">
      <h5>Secciones Principales:</h5>
      <p>El sistema se divide en varias secciones diseñadas para destacar y organizar los proyectos de manera clara e intuitiva:</p>
      <ul>
        <li><strong>Inicio:</strong> Una introducción con un resumen general del perfil y las habilidades del autor.</li>
        <li><strong>Proyectos:</strong> Una galería interactiva que muestra los proyectos desarrollados, con detalles específicos como descripciones, tecnologías utilizadas y enlaces a repositorios o demos.</li>
        <li><strong>Contacto:</strong> Un formulario funcional que permite a los visitantes contactarse con el autor.</li>
      </ul>

      <hr style="margin: 20px 0;">
      <h5>Opciones de Filtro y Navegación:</h5>
      <p>Para facilitar la exploración de los proyectos, la aplicación incluye:</p>
      <ul>
        <li><strong>Filtros Dinámicos:</strong> Permiten a los usuarios filtrar proyectos según categorías como tecnologías utilizadas o tipo de proyecto.</li>
        <li><strong>Navegación Intuitiva:</strong> Un menú claro y responsivo que facilita moverse entre las distintas secciones.</li>
      </ul>
    </div>

    <hr style="margin: 20px 0;">
    <p>Este sistema está diseñado para destacar las habilidades técnicas del desarrollador, presentando su trabajo de manera profesional y organizada, mientras asegura una experiencia de usuario fluida y atractiva.</p>

    <hr style="margin: 20px 0;">
    <div class="technologies">
      <h3>Tecnologías Utilizadas:</h3>
      <ul>
        <li><strong>Angular:</strong> Framework principal para la estructura modular de la aplicación.</li>
        <li><strong>TypeScript:</strong> Lenguaje que aporta tipado estático y robustez al código.</li>
        <li><strong>Bootstrap:</strong> Framework CSS para un diseño responsivo y moderno.</li>
        <li><strong>HTML y CSS:</strong> Base del frontend para estructurar y dar estilo a la aplicación.</li>
      </ul>
           <hr>

      <h3>Enlaces</h3>
      <p>
        Puede ver el repositorio aquí: 
        <a href="https://github.com/JoaquinBetes/joaquin_betes_portfolio" target="_blank">Repositorio Github</a>
      </p>
    </div>
  </div>
  <hr style="margin: 20px 0;">
</section>
        `
        , image: '/joaquin_betes_portfolio/assets/images/portfolio.png', technologies: [ this.selectTech('Angular'), this.selectTech('TypeScript'), this.selectTech('Bootstrap'), this.selectTech('HTML'), this.selectTech('CSS')] }
    // ,
  ];

  getProjects(){
    return [...this.projects]
  }

  getTechnologies(){
    return [...this.technologies]
  }

  filterProjects(selectedTechnologies: Technology[], includeWork: boolean = false) {
    return this.projects.filter(project => {
      // Verifica que las tecnologías seleccionadas coincidan
      const matchesTechnologies = selectedTechnologies.length > 0
        ? selectedTechnologies.every(tech => project.technologies.includes(tech))
        : true;
  
      // Verifica si el atributo "work" no es nulo ni undefined (solo si includeWork es true)
      const matchesWork = includeWork
        ? project.work !== undefined && project.work !== null
        : true;
  
      return matchesTechnologies && matchesWork;
    });
  }
  

}
