import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { PortfolioService } from '../services/portfolio.service';
import { RevealDirective } from '../directives/reveal.directive';
import { TechChipComponent } from '../shared/tech-chip.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective, TechChipComponent],
  template: `
    <section id="skills" class="section">
      <div class="container-narrow">
        <header class="section-head" appReveal>
          <p class="eyebrow">{{ L.t('skills.eyebrow') }}</p>
          <h2 class="section-title">{{ L.t('skills.title') }}</h2>
          <p class="section-lead">{{ L.t('skills.lead') }}</p>
        </header>

        <div class="row g-4">
          @for (group of skillGroups; track group.title.es) {
            <div class="col-md-6" appReveal>
              <div class="surface skill-group">
                <h3 class="skill-group-title">{{ L.pick(group.title) }}</h3>
                <div class="chip-list">
                  @for (tech of group.technologies; track tech.name) {
                    <app-tech-chip [tech]="tech" />
                  }
                </div>
              </div>
            </div>
          }
        </div>

        <h3 class="soft-title" appReveal>{{ L.t('skills.soft.title') }}</h3>
        <div class="row g-4">
          @for (soft of softSkills; track soft.title.es) {
            <div class="col-md-6 col-lg-4" appReveal>
              <div class="surface soft-card card-hover">
                <span class="soft-icon"><i class="bi {{ soft.bi }}" aria-hidden="true"></i></span>
                <h4 class="soft-card-title">{{ L.pick(soft.title) }}</h4>
                <p class="text-muted-2 mb-0">{{ L.pick(soft.description) }}</p>
              </div>
            </div>
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
      .skill-group {
        height: 100%;
        padding: 1.5rem 1.6rem;
      }
      .skill-group-title {
        font-size: 1.05rem;
        margin-bottom: 1.1rem;
        color: var(--jb-heading);
      }
      .soft-title {
        font-size: 1.4rem;
        margin: 3rem 0 1.5rem;
      }
      .soft-card {
        height: 100%;
        padding: 1.5rem;
      }
      .soft-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        border-radius: 12px;
        background: var(--jb-accent-soft);
        color: var(--jb-accent);
        font-size: 1.3rem;
        margin-bottom: 1rem;
      }
      .soft-card-title {
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
      }
    `,
  ],
})
export class SkillsComponent {
  protected readonly L = inject(LanguageService);
  private readonly portfolio = inject(PortfolioService);

  protected readonly skillGroups = this.portfolio.getSkillGroups();
  protected readonly softSkills = this.portfolio.getSoftSkills();
}
