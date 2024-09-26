import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { CardProyectosComponent } from './components/card-proyectos/card-proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutmeComponent } from './contenido/aboutme/aboutme.component';
import { HabilidadesComponent } from './contenido/habilidades/habilidades.component';
import { FormacionComponent } from './contenido/formacion/formacion.component';
import { ProyectosComponent } from './contenido/proyectos/proyectos.component';
import { ContactoComponent } from './contenido/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    CardProyectosComponent,
    FooterComponent,
    HomeComponent,
    AboutmeComponent,
    HabilidadesComponent,
    FormacionComponent,
    ProyectosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
