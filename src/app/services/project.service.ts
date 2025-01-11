import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects = [
    { title: 'Proyecto 1', description: 'Descripción breve del proyecto', image: 'https://via.placeholder.com/350x200', technologies: ['Angular', 'JavaScript'] },
    { title: 'Proyecto 2', description: 'Otro proyecto interesante', image: 'https://via.placeholder.com/350x200', technologies: ['React', 'JavaScript'] },
    { title: 'Proyecto 3', description: 'Un proyecto completo', image: 'https://via.placeholder.com/350x200', technologies: ['Python', '.NET'] },
    { title: 'Proyecto 4', description: 'Otro proyecto en Angular', image: 'https://via.placeholder.com/350x200', technologies: ['Angular', 'TypeScript'] },
    { title: 'Proyecto 5', description: 'Un proyecto más', image: 'https://via.placeholder.com/350x200', technologies: ['PHP', 'JavaScript'] },
  ];

  getProjects(){
    return [...this.projects]
  }

  filterProjects(selectedTechnologies: string[]){
    return selectedTechnologies.length > 0 ?
      this.projects.filter(
        project => selectedTechnologies.every(tech => project.technologies.includes(tech))
      )
      : [...this.projects]
  }

}
