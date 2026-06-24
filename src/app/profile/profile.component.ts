import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { RevealDirective } from '../directives/reveal.directive';

@Component({
  selector: 'app-profile',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  template: `
    <header id="hero" class="hero section">
      <div class="container-narrow">
        <div class="row align-items-center g-5">
          <div class="col-lg-7 order-2 order-lg-1" appReveal>
            <p class="eyebrow">{{ L.t('hero.greeting') }}</p>
            <h1 class="hero-name">Joaquín Betes</h1>
            <p class="hero-role">{{ L.t('hero.role') }}</p>
            <p class="hero-tagline">{{ L.t('hero.tagline') }}</p>

            <div class="hero-facts">
              <span class="chip"><i class="bi bi-braces" aria-hidden="true"></i>{{ L.t('hero.fact.role') }}</span>
              <span class="chip"><i class="bi bi-geo-alt" aria-hidden="true"></i>{{ L.t('hero.fact.location') }}</span>
              <span class="chip"><i class="bi bi-patch-check" aria-hidden="true"></i>{{ L.t('hero.fact.aus') }}</span>
              <span class="chip"><i class="bi bi-mortarboard" aria-hidden="true"></i>{{ L.t('hero.fact.study') }}</span>
            </div>

            <div class="hero-cta">
              <a href="#projects" class="btn btn-primary">
                {{ L.t('hero.cta.projects') }} <i class="bi bi-arrow-right" aria-hidden="true"></i>
              </a>
              <a href="#contact" class="btn btn-outline">{{ L.t('hero.cta.contact') }}</a>
            </div>
          </div>

          <div class="col-lg-5 order-1 order-lg-2 text-center" appReveal>
            <div class="hero-photo">
              <img src="assets/images/profile.jpg" alt="Joaquín Betes" />
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [
    `
      .hero {
        position: relative;
        padding-top: clamp(3.5rem, 11vh, 7rem);
        overflow: hidden;
      }
      .hero::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image: radial-gradient(circle at 1px 1px, var(--jb-bg-grid) 1px, transparent 0);
        background-size: 30px 30px;
        -webkit-mask-image: radial-gradient(ellipse 85% 65% at 60% 0%, #000 25%, transparent 75%);
        mask-image: radial-gradient(ellipse 85% 65% at 60% 0%, #000 25%, transparent 75%);
        pointer-events: none;
        z-index: 0;
      }
      .hero > * {
        position: relative;
        z-index: 1;
      }
      .hero-name {
        font-size: clamp(2.6rem, 7vw, 4.4rem);
        font-weight: 700;
        margin: 0.4rem 0 0;
      }
      .hero-role {
        font-family: var(--jb-font-display);
        font-weight: 600;
        font-size: clamp(1.15rem, 3vw, 1.7rem);
        color: var(--jb-accent);
        margin: 0.3rem 0 0;
      }
      .hero-tagline {
        color: var(--jb-text-muted);
        font-size: 1.12rem;
        max-width: 48ch;
        margin: 1.1rem 0 0;
      }
      .hero-facts {
        display: flex;
        flex-wrap: wrap;
        gap: 0.55rem;
        margin: 1.6rem 0;
      }
      .hero-cta {
        display: flex;
        flex-wrap: wrap;
        gap: 0.8rem;
      }
      .hero-photo {
        position: relative;
        display: inline-block;
      }
      .hero-photo img {
        position: relative;
        z-index: 1;
        width: min(290px, 64vw);
        aspect-ratio: 1;
        object-fit: cover;
        border-radius: 50%;
        border: 1px solid var(--jb-border-strong);
        box-shadow: var(--jb-shadow);
      }
      .hero-photo::after {
        content: '';
        position: absolute;
        inset: -14%;
        border-radius: 50%;
        background: radial-gradient(circle, var(--jb-accent-soft), transparent 62%);
        z-index: 0;
      }
    `,
  ],
})
export class ProfileComponent {
  protected readonly L = inject(LanguageService);
}
