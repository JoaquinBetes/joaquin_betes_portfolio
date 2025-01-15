import { Component, Input } from '@angular/core';
import { Technology, TechSkill } from '../interfaces/technology.interface.js';
import { ProjectService } from '../services/project.service.js';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  tittles: string[] = ["Lenguajes de Programación", "Frameworks y Librerías", "Bases de Datos, Gestores y ORMs", "Control de Versiones"];
  programingLenguages: Technology[] 
  frameworks: Technology[]
  dbTechs: Technology[]
  versionControl: Technology[]
  knownTechs : TechSkill[]


  constructor( private projectService: ProjectService){
    this.programingLenguages = [projectService.selectTech("JavaScript"), projectService.selectTech("TypeScript"), projectService.selectTech("Python"), projectService.selectTech("Java"), projectService.selectTech("Csharp")];
    this.frameworks = [projectService.selectTech("Angular"), projectService.selectTech("Node"), projectService.selectTech("Bootstrap"), projectService.selectTech("NET"), projectService.selectTech("Pandas")];
    this.dbTechs = [projectService.selectTech("MySQL"), projectService.selectTech("SQLServer"), projectService.selectTech("MongoDB"), projectService.selectTech("MikroORM")];
    this.versionControl = [projectService.selectTech("GitHub"), projectService.selectTech("Git")];
    this.knownTechs = [
      {
        title: "Lenguajes de Programación",
        technologies: this.programingLenguages
      },
      {
        title: "Frameworks y Librerías",
        technologies: this.frameworks
      },
      {
        title: "Bases de Datos, Gestores y ORMs",
        technologies: this.dbTechs
      },
      {
        title: "Control de Versiones",
        technologies: this.versionControl
      },
    ]
  }

}
