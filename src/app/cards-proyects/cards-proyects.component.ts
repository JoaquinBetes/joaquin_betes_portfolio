import { Component, Input } from '@angular/core';
import { Technology } from '../interfaces/technology.interface.js';

@Component({
  selector: 'app-cards-proyects',
  standalone: true,
  imports: [],
  templateUrl: './cards-proyects.component.html',
  styleUrl: './cards-proyects.component.scss'
})
export class CardsProyectsComponent {
 @Input() project!: {
    title: string;
    role:string;
    description: string;
    image: string;
    technologies: Technology[];
 }
}
