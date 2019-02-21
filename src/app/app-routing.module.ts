import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ClassesComponent } from '../app/classes/classes.component';
import { SplashScreenComponent } from '../app/splash-screen/splash-screen.component';
import { ExperienceComponent } from '../app/experience/experience.component';
import { ProjectsComponent } from '../app/projects/projects.component';
import { SkillsComponent } from '../app/skills/skills.component';


const routes: Routes = [
  {path: 'experience', component: ExperienceComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'classes', component: ClassesComponent},
  {path: '', component: SplashScreenComponent},

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ], exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { 
}
