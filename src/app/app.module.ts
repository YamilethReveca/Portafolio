import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './contenido/home/home.component';
import { AboutmeComponent } from './contenido/aboutme/aboutme.component';
import { CurriculumComponent } from './contenido/curriculum/curriculum.component';
import { ProyectosComponent } from './contenido/proyectos/proyectos.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PresentacionComponent,
    FooterComponent,
    HomeComponent,
    AboutmeComponent,
    CurriculumComponent,
    ProyectosComponent,


  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
