import { Injectable, effect, signal } from '@angular/core';
import { Lang, Localized } from '../interfaces/i18n';
import { UI } from '../i18n/ui';

const STORAGE_KEY = 'jb-lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<Lang>(this.readInitial());

  constructor() {
    effect(() => {
      const lang = this.lang();
      document.documentElement.setAttribute('lang', lang);
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        /* storage unavailable — ignore */
      }
    });
  }

  toggle(): void {
    this.lang.update((l) => (l === 'es' ? 'en' : 'es'));
  }

  setLang(lang: Lang): void {
    this.lang.set(lang);
  }

  /** Translate a UI dictionary key for the active language. */
  t(key: string): string {
    const entry = UI[key];
    return entry ? entry[this.lang()] : key;
  }

  /** Resolve a localized value for the active language. */
  pick<T>(value: Localized<T>): T {
    return value[this.lang()];
  }

  private readInitial(): Lang {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'es' || stored === 'en') {
        return stored;
      }
    } catch {
      /* ignore */
    }
    return 'es';
  }
}
