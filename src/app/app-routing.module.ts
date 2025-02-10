import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './contenido/home/home.component';
import { AboutmeComponent } from './contenido/aboutme/aboutme.component';
import { CurriculumComponent } from './contenido/curriculum/curriculum.component';
import { ProyectosComponent } from './contenido/proyectos/proyectos.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'curriculum', component: CurriculumComponent },
  { path: 'proyectos', component: ProyectosComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
