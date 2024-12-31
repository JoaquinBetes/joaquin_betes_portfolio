import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HomeComponent
  ],
  template: `
    <main>
      <app-home></app-home>
    </main>
    <router-outlet />
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio_betes_joaquin';
}
