import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject, input, output } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { Project } from '../interfaces/models';
import { TechChipComponent } from '../shared/tech-chip.component';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TechChipComponent],
  host: {
    '(document:keydown.escape)': 'close.emit()',
  },
  template: `
    <div class="pm-overlay" (click)="close.emit()">
      <div class="pm-dialog" role="dialog" aria-modal="true" (click)="$event.stopPropagation()">
        <header class="pm-header">
          <div>
            <span class="pm-context context-{{ project().context }}">{{ L.t('context.' + project().context) }}</span>
            <h2 class="pm-title">{{ L.pick(project().title) }}</h2>
            <p class="pm-role font-mono">{{ L.pick(project().role) }}</p>
          </div>
          <button type="button" class="pm-close" (click)="close.emit()" [attr.aria-label]="L.t('projects.close')">
            <i class="bi bi-x-lg" aria-hidden="true"></i>
          </button>
        </header>

        <div class="pm-body">
          @if (project().image) {
            <img class="pm-cover" [src]="project().image" [alt]="L.pick(project().title)" />
          }
          <p class="pm-summary">{{ L.pick(project().summary) }}</p>

          <h3 class="pm-subtitle">{{ L.t('projects.highlights') }}</h3>
          <ul class="pm-highlights">
            @for (highlight of L.pick(project().highlights); track highlight) {
              <li>{{ highlight }}</li>
            }
          </ul>

          <h3 class="pm-subtitle">{{ L.t('projects.technologies') }}</h3>
          <div class="chip-list">
            @for (tech of project().technologies; track tech.name) {
              <app-tech-chip [tech]="tech" />
            }
          </div>
        </div>

        @if (project().links?.length) {
          <footer class="pm-footer">
            @for (link of project().links ?? []; track link.url) {
              <a class="btn btn-outline btn-sm" [href]="link.url" target="_blank" rel="noopener">
                @if (link.icon) {
                  <i class="bi {{ link.icon }}" aria-hidden="true"></i>
                }
                {{ L.pick(link.label) }}
              </a>
            }
          </footer>
        }
      </div>
    </div>
  `,
  styles: [
    `
      .pm-overlay {
        position: fixed;
        inset: 0;
        z-index: 1080;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding: clamp(1rem, 5vh, 4rem) 1rem;
        background: rgba(2, 6, 12, 0.62);
        backdrop-filter: blur(4px);
        overflow-y: auto;
        animation: pm-fade 0.2s ease;
      }
      @keyframes pm-fade {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      .pm-dialog {
        width: min(720px, 100%);
        background: var(--jb-surface);
        border: 1px solid var(--jb-border);
        border-radius: var(--jb-radius);
        box-shadow: var(--jb-shadow);
        animation: pm-rise 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      }
      @keyframes pm-rise {
        from { opacity: 0; transform: translateY(14px); }
        to { opacity: 1; transform: none; }
      }
      .pm-header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 1rem;
        padding: 1.4rem 1.6rem 1rem;
        border-bottom: 1px solid var(--jb-border);
      }
      .pm-context {
        font-family: var(--jb-font-mono);
        font-size: 0.68rem;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: var(--jb-text-muted);
      }
      .pm-context.context-work { color: var(--jb-accent); }
      .pm-context.context-freelance { color: var(--jb-violet); }
      .pm-title {
        font-size: 1.45rem;
        margin: 0.35rem 0 0.1rem;
      }
      .pm-role {
        font-size: 0.82rem;
        color: var(--jb-accent);
        margin: 0;
      }
      .pm-close {
        flex-shrink: 0;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        border: 1px solid var(--jb-border);
        background: var(--jb-surface-2);
        color: var(--jb-text);
        cursor: pointer;
        transition: color var(--jb-transition), border-color var(--jb-transition);
      }
      .pm-close:hover { color: var(--jb-accent); border-color: var(--jb-accent); }
      .pm-body {
        padding: 1.4rem 1.6rem;
      }
      .pm-cover {
        width: 100%;
        border-radius: var(--jb-radius-sm);
        border: 1px solid var(--jb-border);
        margin-bottom: 1.2rem;
      }
      .pm-summary {
        color: var(--jb-text);
        margin-bottom: 1.4rem;
      }
      .pm-subtitle {
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        font-family: var(--jb-font-mono);
        color: var(--jb-text-muted);
        margin: 1.4rem 0 0.8rem;
      }
      .pm-highlights {
        margin: 0;
        padding-left: 1.1rem;
        display: grid;
        gap: 0.5rem;
      }
      .pm-highlights li::marker { color: var(--jb-accent); }
      .pm-footer {
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
        padding: 1rem 1.6rem 1.5rem;
        border-top: 1px solid var(--jb-border);
      }
    `,
  ],
})
export class ProjectModalComponent implements OnInit, OnDestroy {
  protected readonly L = inject(LanguageService);
  readonly project = input.required<Project>();
  readonly close = output<void>();

  ngOnInit(): void {
    document.body.style.overflow = 'hidden';
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }
}
