import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { PortfolioService } from '../services/portfolio.service';
import { Project } from '../interfaces/models';
import { CardsProyectsComponent } from '../cards-proyects/cards-proyects.component';
import { ProjectModalComponent } from '../project-modal/project-modal.component';
import { RevealDirective } from '../directives/reveal.directive';

@Component({
  selector: 'app-proyects',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardsProyectsComponent, ProjectModalComponent, RevealDirective],
  template: `
    <section id="projects" class="section">
      <div class="container-narrow">
        <header class="section-head" appReveal>
          <p class="eyebrow">{{ L.t('projects.eyebrow') }}</p>
          <h2 class="section-title">{{ L.t('projects.title') }}</h2>
          <p class="section-lead">{{ L.t('projects.lead') }}</p>
        </header>

        <div class="filters" appReveal>
          <button type="button" class="filter-chip" [class.active]="selected().length === 0" (click)="clear()">
            {{ L.t('projects.filter.all') }}
          </button>
          @for (tech of filters; track tech.name) {
            <button type="button" class="filter-chip" [class.active]="isSelected(tech.name)" (click)="toggle(tech.name)">
              {{ tech.label }}
            </button>
          }
        </div>

        @if (visible().length) {
          <div class="row g-4">
            @for (project of visible(); track project.id) {
              <div class="col-sm-6 col-lg-4" appReveal>
                <app-cards-proyects [project]="project" (view)="open(project)" />
              </div>
            }
          </div>
        } @else {
          <p class="text-muted-2 text-center py-5">{{ L.t('projects.empty') }}</p>
        }

        @if (filtered().length > INITIAL) {
          <div class="text-center mt-5">
            <button type="button" class="btn btn-outline" (click)="toggleShowAll()">
              {{ showAll() ? L.t('projects.showLess') : L.t('projects.showMore') }}
            </button>
          </div>
        }
      </div>

      @if (selectedProject(); as project) {
        <app-project-modal [project]="project" (close)="closeModal()" />
      }
    </section>
  `,
  styles: [
    `
      .section-head {
        margin-bottom: 2rem;
      }
      .filters {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 2.25rem;
      }
      .filter-chip {
        font-family: var(--jb-font-mono);
        font-size: 0.82rem;
        padding: 0.42rem 0.95rem;
        border-radius: 999px;
        border: 1px solid var(--jb-border);
        background: transparent;
        color: var(--jb-text-muted);
        cursor: pointer;
        transition: color var(--jb-transition), border-color var(--jb-transition), background var(--jb-transition);
      }
      .filter-chip:hover {
        color: var(--jb-accent);
        border-color: var(--jb-accent);
      }
      .filter-chip.active {
        color: var(--jb-accent-contrast);
        background: var(--jb-accent);
        border-color: var(--jb-accent);
      }
    `,
  ],
})
export class ProyectsComponent {
  protected readonly L = inject(LanguageService);
  private readonly portfolio = inject(PortfolioService);

  protected readonly INITIAL = 6;
  protected readonly filters = this.portfolio.getProjectFilters();
  private readonly allProjects = this.portfolio.getProjects();

  protected readonly selected = signal<string[]>([]);
  protected readonly showAll = signal(false);
  protected readonly selectedProject = signal<Project | null>(null);

  protected readonly filtered = computed(() => {
    const sel = this.selected();
    if (sel.length === 0) {
      return this.allProjects;
    }
    return this.allProjects.filter((project) =>
      sel.every((name) => project.technologies.some((tech) => tech.name === name)),
    );
  });

  protected readonly visible = computed(() => {
    const list = this.filtered();
    return this.showAll() ? list : list.slice(0, this.INITIAL);
  });

  protected isSelected(name: string): boolean {
    return this.selected().includes(name);
  }

  protected toggle(name: string): void {
    this.selected.update((current) =>
      current.includes(name) ? current.filter((n) => n !== name) : [...current, name],
    );
  }

  protected clear(): void {
    this.selected.set([]);
  }

  protected toggleShowAll(): void {
    this.showAll.update((value) => !value);
  }

  protected open(project: Project): void {
    this.selectedProject.set(project);
  }

  protected closeModal(): void {
    this.selectedProject.set(null);
  }
}
