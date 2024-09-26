import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { CardProyectosComponent } from './components/card-proyectos/card-proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutmeComponent } from './contenido/aboutme/aboutme.component';
import { ContactoComponent } from './contenido/contacto/contacto.component';
import { FormacionComponent } from './contenido/formacion/formacion.component';
import { HabilidadesComponent } from './contenido/habilidades/habilidades.component';
import { ProyectosComponent } from './contenido/proyectos/proyectos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'nav', component: NavComponent },
  { path: 'card-proyectos', component: CardProyectosComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'formacion', component: FormacionComponent },
  { path: 'habilidades', component: HabilidadesComponent },
  { path: 'proyectos', component: ProyectosComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
