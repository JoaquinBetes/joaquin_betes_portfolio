import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ExperienceComponent } from '../experience/experience.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProyectsComponent } from '../proyects/proyects.component';
import { EducationComponent } from '../education/education.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ProfileComponent,
    AboutMeComponent,
    ExperienceComponent,
    SkillsComponent,
    ProyectsComponent,
    EducationComponent,
    ContactComponent,
  ],
  template: `
    <main id="main">
      <app-profile />
      <app-about-me />
      <app-experience />
      <app-skills />
      <app-proyects />
      <app-education />
      <app-contact />
    </main>
  `,
})
export class HomeComponent {}
