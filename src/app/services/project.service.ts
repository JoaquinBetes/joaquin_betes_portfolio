import { Injectable } from '@angular/core';
import { Technology } from '../interfaces/technology.interface.js';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private technologies: Technology[] = [
    { name: 'Angular', icon:"../../assets/icons/angular.svg"},
    { name: 'JavaScript', icon:"../../assets/icons/js.svg" },
    { name: 'Java', icon:"../../assets/icons/java.png" },
    { name: 'PHP', icon:"../../assets/icons/php.svg" },
    { name: 'React', icon:"../../assets/icons/react.svg" },
    { name: 'TypeScript', icon:"../../assets/icons/ts.png" },
    { name: 'MikroORM', icon:"../../assets/icons/mikroorm.svg" },
    { name: 'Node', icon:"../../assets/icons/node.png" },
    { name: 'ExpressJs', icon:"../../assets/icons/expressjs.svg" },
    { name: 'Python', icon:"../../assets/icons/python.svg" },
    { name: 'Pandas', icon:"../../assets/icons/pandas.png" },
    { name: 'NET', icon:"../../assets/icons/.NET.svg" },
    { name: 'Csharp', icon:"../../assets/icons/csharp.svg" },
    { name: 'HTML', icon:"../../assets/icons/html.svg" },
    { name: 'CSS', icon:"../../assets/icons/css.svg" },
    { name: 'Bootstrap', icon:"../../assets/icons/bootstrap.png" },
    { name: 'MySQL', icon:"../../assets/icons/mysql.png" },
    { name: 'SQLServer', icon:"../../assets/icons/sqlserver.png" },
    { name: 'MongoDB', icon:"../../assets/icons/mongodb.svg" },
    { name: 'GitHub', icon:"../../assets/icons/github.svg" },
    { name: 'Git', icon:"../../assets/icons/git.svg" },
    { name: 'GoogleMapsAPI', icon:"../../assets/icons/googlemaps.png" },
    
  ];

  selectTech(techName: string): Technology{
    const tech = this.technologies.find(tech => tech.name === techName);
    if (!tech) {
      throw new Error(`Technology "${techName}" not found.`);
    }
    return tech;
  }

  private projects = [
    { title: 'Sistema de gestión de estudio de tatuadores', role:"Fullstack", description: 'Descripción breve del proyecto', image: '../../assets/images/tattoo.png', technologies: [this.selectTech('Angular'), this.selectTech('TypeScript'), this.selectTech('MikroORM'), this.selectTech('MySQL'), this.selectTech('Node'), this.selectTech('ExpressJs') ] },
    { title: 'Sistema de gestión académica', role:"Fullstack", description: 'Otro proyecto interesante', image: '../../assets/images/academia.png', technologies: [this.selectTech('Csharp'), this.selectTech('NET'), this.selectTech('SQLServer')] },
    { title: 'Entrenamiento agentes IA para Breakout', role:"Investigador y desarrollador", description: 'Un proyecto completo', image: '../../assets/images/paper.png', technologies: [this.selectTech('Python'), this.selectTech('Pandas')] },
    { title: 'Sistema de Venta de entradas', role:"Fullstack", description: 'Otro proyecto en Angular', image: '../../assets/images/ventaentradas.png', technologies: [this.selectTech('Java'), this.selectTech('MySQL'), this.selectTech('JavaScript'), this.selectTech('Bootstrap')] },
    { title: 'Administración inmobiliaria', role:"Frontend", description: 'Un proyecto más', image: '../../assets/images/inmobiliaria.png', technologies: [this.selectTech('PHP'), this.selectTech('MySQL'), this.selectTech('JavaScript'), this.selectTech('HTML'), this.selectTech('CSS')], work: "yes" },
    { title: 'Web para Profesional del Tatuaje', role:"Frontend", description: 'Un proyecto más', image: '../../assets/images/tattood.png', technologies: [ this.selectTech('JavaScript'), this.selectTech('HTML'), this.selectTech('CSS'), this.selectTech('GoogleMapsAPI')] }
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
