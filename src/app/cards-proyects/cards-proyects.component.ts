import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { Project } from '../interfaces/models';
import { TechChipComponent } from '../shared/tech-chip.component';

@Component({
  selector: 'app-cards-proyects',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TechChipComponent],
  template: `
    <article
      class="card card-hover project-card h-100"
      role="button"
      tabindex="0"
      (click)="view.emit()"
      (keydown.enter)="view.emit()"
      (keydown.space)="$event.preventDefault(); view.emit()"
    >
      <div class="project-cover">
        @if (project().image) {
          <img [src]="project().image" [alt]="L.pick(project().title)" loading="lazy" />
        } @else {
          <div class="project-cover--fallback">
            <i class="bi {{ project().coverIcon ?? 'bi-folder2-open' }}" aria-hidden="true"></i>
          </div>
        }
        <span class="context-badge context-{{ project().context }}">{{ L.t('context.' + project().context) }}</span>
      </div>

      <div class="project-body">
        <h3 class="project-title">{{ L.pick(project().title) }}</h3>
        <p class="project-role font-mono">{{ L.pick(project().role) }}</p>
        <p class="project-summary text-muted-2">{{ L.pick(project().summary) }}</p>

        <div class="chip-list project-techs">
          @for (tech of shownTechs(); track tech.name) {
            <app-tech-chip [tech]="tech" [small]="true" />
          }
          @if (extraTechs() > 0) {
            <span class="chip chip--sm">+{{ extraTechs() }}</span>
          }
        </div>

        <span class="project-more">{{ L.t('projects.viewMore') }} <i class="bi bi-arrow-right" aria-hidden="true"></i></span>
      </div>
    </article>
  `,
  styles: [
    `
      .project-card {
        overflow: hidden;
        cursor: pointer;
        display: flex;
        flex-direction: column;
      }
      .project-cover {
        position: relative;
        aspect-ratio: 16 / 9;
        overflow: hidden;
        background: var(--jb-surface-2);
      }
      .project-cover img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform var(--jb-transition);
      }
      .project-card:hover .project-cover img {
        transform: scale(1.04);
      }
      .project-cover--fallback {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        color: var(--jb-accent);
        background:
          radial-gradient(circle at 30% 20%, var(--jb-accent-soft), transparent 60%),
          var(--jb-surface-2);
      }
      .context-badge {
        position: absolute;
        top: 0.7rem;
        left: 0.7rem;
        font-family: var(--jb-font-mono);
        font-size: 0.68rem;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        padding: 0.28rem 0.6rem;
        border-radius: 999px;
        backdrop-filter: blur(6px);
        border: 1px solid var(--jb-border);
        background: color-mix(in srgb, var(--jb-bg) 70%, transparent);
        color: var(--jb-text);
      }
      .context-work { color: var(--jb-accent); border-color: var(--jb-accent); }
      .context-freelance { color: var(--jb-violet); border-color: var(--jb-violet); }
      .project-body {
        padding: 1.25rem 1.35rem 1.4rem;
        display: flex;
        flex-direction: column;
        flex: 1;
      }
      .project-title {
        font-size: 1.18rem;
        margin-bottom: 0.15rem;
      }
      .project-role {
        font-size: 0.78rem;
        color: var(--jb-accent);
        margin-bottom: 0.6rem;
      }
      .project-summary {
        font-size: 0.93rem;
        margin-bottom: 1rem;
      }
      .project-techs {
        margin-bottom: 1.1rem;
      }
      .project-more {
        margin-top: auto;
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        font-weight: 600;
        font-size: 0.9rem;
        color: var(--jb-accent);
        transition: gap var(--jb-transition);
      }
      .project-card:hover .project-more {
        gap: 0.7rem;
      }
    `,
  ],
})
export class CardsProyectsComponent {
  protected readonly L = inject(LanguageService);
  readonly project = input.required<Project>();
  readonly view = output<void>();

  private readonly MAX_TECHS = 4;
  protected readonly shownTechs = computed(() => this.project().technologies.slice(0, this.MAX_TECHS));
  protected readonly extraTechs = computed(() => Math.max(0, this.project().technologies.length - this.MAX_TECHS));
}
