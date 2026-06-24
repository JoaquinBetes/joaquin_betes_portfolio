import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { ThemeService } from '../services/theme.service';

interface NavLink {
  fragment: string;
  key: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav class="app-nav navbar navbar-expand-lg" aria-label="Principal">
      <div class="container-narrow d-flex flex-wrap align-items-center">
        <a class="brand navbar-brand me-auto" href="#hero" (click)="closeMenu()">
          Joaquín Betes<span class="brand-dot">.</span>
        </a>

        <div class="d-flex align-items-center gap-2 order-lg-3">
          <button type="button" class="icon-btn" (click)="lang.toggle()" [attr.aria-label]="lang.t('nav.toggleLang')">
            {{ lang.lang() === 'es' ? 'EN' : 'ES' }}
          </button>
          <button type="button" class="icon-btn" (click)="theme.toggle()" [attr.aria-label]="lang.t('nav.toggleTheme')">
            <i class="bi" [class.bi-sun]="theme.theme() === 'dark'" [class.bi-moon-stars]="theme.theme() === 'light'"></i>
          </button>
          <button
            class="navbar-toggler border-0 d-lg-none p-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            [attr.aria-label]="lang.t('nav.menu')"
          >
            <i class="bi bi-list fs-3"></i>
          </button>
        </div>

        <div class="collapse navbar-collapse order-lg-2 flex-grow-0" id="mainNav">
          <ul class="navbar-nav mt-3 mt-lg-0">
            @for (link of links; track link.fragment) {
              <li class="nav-item">
                <a class="nav-link" [href]="'#' + link.fragment" (click)="closeMenu()">{{ lang.t(link.key) }}</a>
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  `,
})
export class HeaderComponent {
  protected readonly lang = inject(LanguageService);
  protected readonly theme = inject(ThemeService);

  protected readonly links: NavLink[] = [
    { fragment: 'about', key: 'nav.about' },
    { fragment: 'experience', key: 'nav.experience' },
    { fragment: 'skills', key: 'nav.skills' },
    { fragment: 'projects', key: 'nav.projects' },
    { fragment: 'education', key: 'nav.education' },
    { fragment: 'contact', key: 'nav.contact' },
  ];

  protected closeMenu(): void {
    document.getElementById('mainNav')?.classList.remove('show');
  }
}
