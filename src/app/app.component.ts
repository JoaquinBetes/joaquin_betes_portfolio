import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    HeaderComponent,
  ],
  template: `
    <main [attr.data-bs-theme]="modoOscuro">
      <app-header (modoChanged)="cambiarModo($event)" ></app-header>
      <app-home ></app-home>
    </main>
    <router-outlet />
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio_betes_joaquin';
  modoOscuro: string = 'dark';

  cambiarModo(modo:string){
    this.modoOscuro = modo;
  }
  
}
