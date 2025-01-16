import { Component } from '@angular/core';
import { ProjectService } from '../services/project.service.js';
import { CardsProyectsComponent } from '../cards-proyects/cards-proyects.component.js';
import { Technology } from '../interfaces/technology.interface.js';

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [CardsProyectsComponent],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.scss'
})
export class ProyectsComponent {
  technologies: string[] = ['JavaScript', 'TypeScript','Angular', 'React', 'Node',  'Python', 'Pandas', 'NET','Java', 'PHP','MySQL', 'SQLServer', 'MongoDB', 'MikroORM', 'Bootstrap' ];
  visibleProjects: { title: string; role:string, description: string; image: string; technologies: Technology[] }[] = [];
  showAll = false; 
  includeWork: boolean = false;
  selectedTechnologies: Technology[] = [];

  constructor(private projectService: ProjectService){}

  ngOnInit() {
    this.updateVisibleProjects();
  }

  updateVisibleProjects() {
    const filteredProjects = this.projectService.filterProjects(this.selectedTechnologies, this.includeWork);
    this.visibleProjects = this.showAll ? filteredProjects : filteredProjects.slice(0,3);
  }

  toggleShowAll() {
    this.showAll = !this.showAll;
    this.updateVisibleProjects();
  }

  toggleWorkFilter() {
    this.includeWork = !this.includeWork;
    this.updateVisibleProjects();
  }

  toggleTechnologySelection(techName: string) {
    const tech = this.projectService.selectTech(techName);
    if (!tech) return;

    const index = this.selectedTechnologies.findIndex(t => t.name === tech.name);
    if (index === -1) {
      this.selectedTechnologies.push(tech); // Si no está seleccionada, la agregamos
    } else {
      this.selectedTechnologies.splice(index, 1); // Si está seleccionada, la quitamos
    }
    this.updateVisibleProjects(); // Volver a actualizar los proyectos
  }

  isTechnologySelected(tech: string): boolean {
    return this.selectedTechnologies.some(t => t.name === tech);
  }
  

  clearSelections() {
    this.selectedTechnologies = [];
    this.includeWork = false;
    this.updateVisibleProjects();
  }
}
