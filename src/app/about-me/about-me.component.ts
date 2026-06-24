import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { RevealDirective } from '../directives/reveal.directive';

interface NowItem {
  bi: string;
  key: string;
}

@Component({
  selector: 'app-about-me',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  template: `
    <section id="about" class="section">
      <div class="container-narrow">
        <div class="row g-5 align-items-start">
          <div class="col-lg-7" appReveal>
            <p class="eyebrow">{{ L.t('about.eyebrow') }}</p>
            <h2 class="section-title">{{ L.t('about.title') }}</h2>
            <p class="about-p">{{ L.t('about.p1') }}</p>
            <p class="about-p">{{ L.t('about.p2') }}</p>
            <p class="about-p">{{ L.t('about.p3') }}</p>
          </div>

          <div class="col-lg-5" appReveal>
            <div class="surface now-card">
              <h3 class="now-title">
                <span class="now-pulse" aria-hidden="true"></span>{{ L.t('about.now') }}
              </h3>
              <ul class="now-list">
                @for (item of nowItems; track item.key) {
                  <li><i class="bi {{ item.bi }}" aria-hidden="true"></i>{{ L.t(item.key) }}</li>
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .about-p {
        color: var(--jb-text);
        margin-bottom: 1rem;
      }
      .now-card {
        padding: 1.6rem 1.7rem;
      }
      .now-title {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        font-size: 1.05rem;
        font-family: var(--jb-font-mono);
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: var(--jb-text-muted);
        margin-bottom: 1.1rem;
      }
      .now-pulse {
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background: var(--jb-accent);
        box-shadow: 0 0 0 0 var(--jb-accent);
        animation: now-pulse 2.4s ease-out infinite;
      }
      @keyframes now-pulse {
        0% { box-shadow: 0 0 0 0 var(--jb-accent-soft); }
        70% { box-shadow: 0 0 0 8px transparent; }
        100% { box-shadow: 0 0 0 0 transparent; }
      }
      .now-list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 0.9rem;
      }
      .now-list li {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-weight: 500;
      }
      .now-list i {
        color: var(--jb-accent);
        font-size: 1.15rem;
        width: 1.4rem;
        text-align: center;
      }
    `,
  ],
})
export class AboutMeComponent {
  protected readonly L = inject(LanguageService);

  protected readonly nowItems: NowItem[] = [
    { bi: 'bi-briefcase', key: 'about.now.work' },
    { bi: 'bi-patch-check', key: 'about.now.aus' },
    { bi: 'bi-mortarboard', key: 'about.now.study' },
    { bi: 'bi-geo-alt', key: 'about.now.location' },
    { bi: 'bi-translate', key: 'about.now.lang' },
  ];
}
