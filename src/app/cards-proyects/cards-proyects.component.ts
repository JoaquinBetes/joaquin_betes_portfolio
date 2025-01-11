import { Component, Input } from '@angular/core';

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
    description: string;
    image: string;
    technologies: string[];
 }
}
