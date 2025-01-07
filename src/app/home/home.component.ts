import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  technologies: string[] = ['Angular', 'JavaScript', 'TypeScript', 'React', 'Python', '.NET', 'PHP'];

  // Define los proyectos con las tecnologías
  projects: { title: string; description: string; image: string; technologies: string[] }[] = [
    { title: 'Proyecto 1', description: 'Descripción breve del proyecto', image: 'https://via.placeholder.com/350x200', technologies: ['Angular', 'JavaScript'] },
    { title: 'Proyecto 2', description: 'Otro proyecto interesante', image: 'https://via.placeholder.com/350x200', technologies: ['React', 'JavaScript'] },
    { title: 'Proyecto 3', description: 'Un proyecto completo', image: 'https://via.placeholder.com/350x200', technologies: ['Python', '.NET'] },
    { title: 'Proyecto 4', description: 'Otro proyecto en Angular', image: 'https://via.placeholder.com/350x200', technologies: ['Angular', 'TypeScript'] },
    { title: 'Proyecto 5', description: 'Un proyecto más', image: 'https://via.placeholder.com/350x200', technologies: ['PHP', 'JavaScript'] },
  ];

  filteredProjects: { title: string; description: string; image: string; technologies: string[] }[] = this.projects;
  visibleProjects: { title: string; description: string; image: string; technologies: string[] }[] = [];
  showAll = false; // Controla si se muestran todos los proyectos
  selectedTechnologies: string[] = [];

  ngOnInit() {
    this.updateVisibleProjects();
  }

  // Método que actualiza los proyectos visibles según las tecnologías seleccionadas
  updateVisibleProjects() {
    const projectsToDisplay = this.selectedTechnologies.length > 0
      ? this.projects.filter(p =>
          this.selectedTechnologies.every(tech => p.technologies.includes(tech)) // Verifica que el proyecto tenga todas las tecnologías seleccionadas
        )
      : this.projects;

    this.visibleProjects = this.showAll ? projectsToDisplay : projectsToDisplay.slice(0, 3);
  }

  // Método para alternar la visibilidad de los proyectos (mostrar más o menos)
  toggleShowAll() {
    this.showAll = !this.showAll;
    this.updateVisibleProjects();
  }

  // Método para seleccionar o deseleccionar una tecnología
  toggleTechnologySelection(tech: string) {
    const index = this.selectedTechnologies.indexOf(tech);
    if (index === -1) {
      this.selectedTechnologies.push(tech); // Si no está seleccionada, la agregamos
    } else {
      this.selectedTechnologies.splice(index, 1); // Si está seleccionada, la quitamos
    }
    this.updateVisibleProjects(); // Volver a actualizar los proyectos
  }

  // Método para limpiar todas las selecciones
  clearSelections() {
    this.selectedTechnologies = [];
    this.updateVisibleProjects();
  }
}
