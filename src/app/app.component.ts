import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ThemeService } from './services/theme.service';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeaderComponent, HomeComponent, FooterComponent],
  template: `
    <app-header />
    <app-home />
    <app-footer />
  `,
})
export class AppComponent {
  // Eagerly instantiate so the persisted theme/language are applied on load.
  private readonly theme = inject(ThemeService);
  private readonly language = inject(LanguageService);
}
