import { Component } from '@angular/core';
import { ProjectService } from '../services/project.service.js';
import { CardsProyectsComponent } from '../cards-proyects/cards-proyects.component.js';

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [CardsProyectsComponent],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.scss'
})
export class ProyectsComponent {
  technologies: string[] = ['Angular', 'JavaScript', 'TypeScript', 'React', 'Python', '.NET', 'PHP'];
  visibleProjects: { title: string; description: string; image: string; technologies: string[] }[] = [];
  showAll = false; 
  selectedTechnologies: string[] = [];

  constructor(private projectService: ProjectService){}

  ngOnInit() {
    this.updateVisibleProjects();
  }

  updateVisibleProjects() {
    const filteredProjects = this.projectService.filterProjects(this.selectedTechnologies)
    this.visibleProjects = this.showAll ? filteredProjects : filteredProjects.slice(0,3);
  }

  toggleShowAll() {
    this.showAll = !this.showAll;
    this.updateVisibleProjects();
  }

  toggleTechnologySelection(tech: string) {
    const index = this.selectedTechnologies.indexOf(tech);
    if (index === -1) {
      this.selectedTechnologies.push(tech); // Si no está seleccionada, la agregamos
    } else {
      this.selectedTechnologies.splice(index, 1); // Si está seleccionada, la quitamos
    }
    this.updateVisibleProjects(); // Volver a actualizar los proyectos
  }

  clearSelections() {
    this.selectedTechnologies = [];
    this.updateVisibleProjects();
  }
}
