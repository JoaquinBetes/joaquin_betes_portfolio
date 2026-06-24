import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { PortfolioService } from '../services/portfolio.service';
import { RevealDirective } from '../directives/reveal.directive';
import { TechChipComponent } from '../shared/tech-chip.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective, TechChipComponent],
  template: `
    <section id="experience" class="section">
      <div class="container-narrow">
        <header class="section-head" appReveal>
          <p class="eyebrow">{{ L.t('experience.eyebrow') }}</p>
          <h2 class="section-title">{{ L.t('experience.title') }}</h2>
        </header>

        <div class="timeline">
          @for (item of experience; track item.id) {
            <article class="timeline-item" appReveal>
              <span class="timeline-period">{{ L.pick(item.period) }}</span>
              <h3 class="exp-role">{{ L.pick(item.role) }}</h3>
              <p class="exp-company">
                <span class="exp-company-name">{{ item.company }}</span>
                @if (item.location) {
                  <span class="exp-location">· {{ L.pick(item.location) }}</span>
                }
              </p>
              <p class="text-muted-2 exp-summary">{{ L.pick(item.summary) }}</p>
              <ul class="exp-highlights">
                @for (h of L.pick(item.highlights); track h) {
                  <li>{{ h }}</li>
                }
              </ul>
              <div class="chip-list mt-3">
                @for (tech of item.technologies; track tech.name) {
                  <app-tech-chip [tech]="tech" [small]="true" />
                }
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .section-head {
        margin-bottom: 2.25rem;
      }
      .exp-role {
        font-size: 1.3rem;
        margin: 0.35rem 0 0.1rem;
      }
      .exp-company {
        font-weight: 600;
        margin-bottom: 0.6rem;
      }
      .exp-company-name {
        color: var(--jb-accent);
      }
      .exp-location {
        color: var(--jb-text-muted);
        font-weight: 400;
      }
      .exp-summary {
        max-width: 62ch;
        margin-bottom: 0.85rem;
      }
      .exp-highlights {
        margin: 0;
        padding-left: 1.1rem;
        display: grid;
        gap: 0.4rem;
      }
      .exp-highlights li {
        color: var(--jb-text);
      }
      .exp-highlights li::marker {
        color: var(--jb-accent);
      }
    `,
  ],
})
export class ExperienceComponent {
  protected readonly L = inject(LanguageService);
  protected readonly experience = inject(PortfolioService).getExperience();
}
