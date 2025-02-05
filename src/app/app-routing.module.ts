import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';

import { FooterComponent } from './components/footer/footer.component';
import { AboutmeComponent } from './contenido/aboutme/aboutme.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'header', component: HeaderComponent },

  { path: 'footer', component: FooterComponent },
  { path: 'aboutme', component: AboutmeComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
