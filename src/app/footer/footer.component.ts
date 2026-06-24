import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="app-footer">
      <div class="container-narrow footer-inner">
        <a class="brand" href="#hero">Joaquín Betes<span class="brand-dot">.</span></a>
        <p class="footer-note text-muted-2">© {{ year }} Joaquín Betes · {{ L.t('footer.built') }}</p>
        <div class="footer-socials">
          <a href="https://www.linkedin.com/in/joaquin-betes/" target="_blank" rel="noopener" aria-label="LinkedIn">
            <i class="bi bi-linkedin" aria-hidden="true"></i>
          </a>
          <a href="https://github.com/JoaquinBetes" target="_blank" rel="noopener" aria-label="GitHub">
            <i class="bi bi-github" aria-hidden="true"></i>
          </a>
          <a href="mailto:betesjoaquin@gmail.com" aria-label="Email">
            <i class="bi bi-envelope" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </footer>
  `,
  styles: [
    `
      .app-footer {
        border-top: 1px solid var(--jb-border);
        padding: 2rem 0;
        margin-top: 2rem;
      }
      .footer-inner {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
      }
      .footer-note {
        margin: 0;
        font-size: 0.85rem;
      }
      .footer-socials {
        display: flex;
        gap: 0.6rem;
      }
      .footer-socials a {
        color: var(--jb-text-muted);
        font-size: 1.15rem;
        transition: color var(--jb-transition);
      }
      .footer-socials a:hover {
        color: var(--jb-accent);
      }
    `,
  ],
})
export class FooterComponent {
  protected readonly L = inject(LanguageService);
  protected readonly year = new Date().getFullYear();
}
