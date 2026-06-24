import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { PortfolioService } from '../services/portfolio.service';
import { RevealDirective } from '../directives/reveal.directive';

@Component({
  selector: 'app-education',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  template: `
    <section id="education" class="section">
      <div class="container-narrow">
        <header class="section-head" appReveal>
          <p class="eyebrow">{{ L.t('education.eyebrow') }}</p>
          <h2 class="section-title">{{ L.t('education.title') }}</h2>
        </header>

        <div class="timeline">
          @for (item of education; track item.id) {
            <article class="timeline-item" appReveal>
              @if (item.period) {
                <span class="timeline-period">{{ L.pick(item.period) }}</span>
              } @else if (item.status) {
                <span class="timeline-period">{{ L.pick(item.status) }}</span>
              }
              <h3 class="edu-degree">{{ L.pick(item.degree) }}</h3>
              <p class="edu-inst">
                {{ item.institution }}
                @if (item.period && item.status) {
                  <span class="edu-status">{{ L.pick(item.status) }}</span>
                }
              </p>
              @if (item.detail) {
                <p class="text-muted-2 mb-0">{{ L.pick(item.detail) }}</p>
              }
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
      .edu-degree {
        font-size: 1.2rem;
        margin: 0.35rem 0 0.1rem;
      }
      .edu-inst {
        font-weight: 600;
        margin-bottom: 0.35rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.6rem;
      }
      .edu-status {
        font-family: var(--jb-font-mono);
        font-size: 0.7rem;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        padding: 0.2rem 0.55rem;
        border-radius: 999px;
        color: var(--jb-accent);
        background: var(--jb-accent-soft);
      }
    `,
  ],
})
export class EducationComponent {
  protected readonly L = inject(LanguageService);
  protected readonly education = inject(PortfolioService).getEducation();
}
