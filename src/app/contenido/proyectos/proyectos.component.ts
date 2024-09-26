import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.sass']
})
export class ProyectosComponent {

  proyectos = [
    { nombre: 'Trivia', enlace: 'https://trivia-pre-admision.vercel.app/', imagen: '../../../assets/image/trivia_1.jpg', summary: 'Juego de Trivia para aprender y divertirse, contiene 2 alternativas de juego: gastronomía y cultura general.' },
    { nombre: 'Analizador de texto', enlace: 'https://yamilethreveca.github.io/DEV012-text-analyzer/', imagen: '../../../assets/image/proyecto_analisis-de-texto.png', summary: 'Analiza texto y proporciona métricas, nos permite medir las palabras, caracteres,suma, numeros entre otros.' },
    { nombre: 'DataVerse', enlace: 'https://yamilethreveca.github.io/DEV012-dataverse/', imagen: '../../../assets/image/proyecto_pokemon-removebg-preview.png', summary: 'Explora datos sobre Pokémon, podemos filtrar y ordenar segun por elemento del pokémon.' },
    { nombre: 'Dataverse Chat con IA', enlace: 'https://dataverse-chat.vercel.app/', imagen: '../../../assets/image/proyecto_IA.jpg', summary: 'Interacción con IA para conversar con los personajes de One Piece.' },
    { nombre: 'Movie Challenge con Angular', enlace: 'https://movie-challenge-con-framework.vercel.app/', imagen: '../../../assets/image/movie.jpg', summary: 'Mostar listado de peliculas, filtrar por genero y ordenar por: popularidad, fecha de estreno y por votación, todo a través de la api de TMDB.' },
    { nombre: 'App Burger Queen Api Client', enlace: 'https://burger-queen-api-client-self.vercel.app/', imagen: '../../../assets/image/restaurante.png', summary: 'Aplicación de restaurante que nos permite generar pedidos a la cocina y cambiar el estado cuando esté listo, también está integrado con API.' }
  ]

  resumenVisible = false;
  resumenTexto = '';
  resumenPos = { x: 0, y: 0 };

  mostrarResumen(proyecto: any, event: MouseEvent) {
    this.resumenTexto = proyecto.summary;
    this.resumenVisible = true;

    const button = event.currentTarget as HTMLElement;
    const rect = button.getBoundingClientRect();
    this.resumenPos = { x: rect.left + window.scrollX, y: rect.bottom + window.scrollY };
  }

  ocultarResumen() {
    this.resumenVisible = false;
  }

}





