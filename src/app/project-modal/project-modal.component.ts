import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Technology } from '../interfaces/technology.interface';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent {
  @Input() project!: { title: string; role: string; description: string; image: string; technologies: Technology[] };
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
