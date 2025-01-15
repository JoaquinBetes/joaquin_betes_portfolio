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
    { title: 'Proyecto 4', role:"Frontend", description: 'Otro proyecto en Angular', image: 'https://via.placeholder.com/350x200', technologies: [this.selectTech('Angular'), this.selectTech('TypeScript')] },
    { title: 'Proyecto 5', role:"Frontend", description: 'Un proyecto más', image: 'https://via.placeholder.com/350x200', technologies: [this.selectTech('PHP'), this.selectTech('JavaScript')] },
  ];

  getProjects(){
    return [...this.projects]
  }

  getTechnologies(){
    return [...this.technologies]
  }

  filterProjects(selectedTechnologies: Technology[]){
    return selectedTechnologies.length > 0 ?
      this.projects.filter(
        project => selectedTechnologies.every(tech => project.technologies.includes(tech))
      )
      : [...this.projects]
  }

}
