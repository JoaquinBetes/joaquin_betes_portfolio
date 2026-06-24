import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Technology } from '../interfaces/models';

/** A single technology rendered as a pill: brand icon (or Bootstrap-icon) + label. */
@Component({
  selector: 'app-tech-chip',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'chip', '[class.chip--sm]': 'small()' },
  template: `
    @if (tech().icon) {
      <img [src]="tech().icon" [alt]="tech().label" />
    } @else if (tech().bi) {
      <i class="bi {{ tech().bi }}" aria-hidden="true"></i>
    }
    <span>{{ tech().label }}</span>
  `,
})
export class TechChipComponent {
  readonly tech = input.required<Technology>();
  readonly small = input(false);
}
