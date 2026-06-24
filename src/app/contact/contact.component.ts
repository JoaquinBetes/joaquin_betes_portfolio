import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { RevealDirective } from '../directives/reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  template: `
    <section id="contact" class="section">
      <div class="container-narrow">
        <div class="surface contact-card" appReveal>
          <p class="eyebrow justify-content-center">{{ L.t('contact.eyebrow') }}</p>
          <h2 class="section-title">{{ L.t('contact.title') }}</h2>
          <p class="section-lead mx-auto">{{ L.t('contact.lead') }}</p>

          <a class="btn btn-primary btn-lg" href="mailto:betesjoaquin@gmail.com">
            <i class="bi bi-envelope-fill" aria-hidden="true"></i> {{ L.t('contact.cta') }}
          </a>

          <div class="contact-socials">
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

          <p class="contact-email font-mono">betesjoaquin&#64;gmail.com</p>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .contact-card {
        text-align: center;
        padding: clamp(2.5rem, 6vw, 4rem) 1.5rem;
        background:
          radial-gradient(circle at 50% 0%, var(--jb-accent-soft), transparent 55%),
          var(--jb-surface);
      }
      .contact-card .section-lead {
        margin-bottom: 1.8rem;
      }
      .contact-socials {
        display: flex;
        justify-content: center;
        gap: 0.9rem;
        margin-top: 2rem;
      }
      .contact-socials a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 46px;
        height: 46px;
        border-radius: 50%;
        border: 1px solid var(--jb-border);
        background: var(--jb-surface-2);
        color: var(--jb-text);
        font-size: 1.25rem;
        transition: color var(--jb-transition), border-color var(--jb-transition), transform var(--jb-transition);
      }
      .contact-socials a:hover {
        color: var(--jb-accent);
        border-color: var(--jb-accent);
        transform: translateY(-3px);
      }
      .contact-email {
        margin-top: 1.4rem;
        margin-bottom: 0;
        color: var(--jb-text-muted);
        font-size: 0.9rem;
      }
    `,
  ],
})
export class ContactComponent {
  protected readonly L = inject(LanguageService);
}
