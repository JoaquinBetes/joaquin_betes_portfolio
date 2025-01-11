import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component.js';
import { AboutMeComponent } from '../about-me/about-me.component.js';
import { ProyectsComponent } from '../proyects/proyects.component.js';
import { ContactComponent } from '../contact/contact.component.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProfileComponent,
    AboutMeComponent,
    ProyectsComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
