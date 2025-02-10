import { Component, OnInit } from '@angular/core';

// interface Proyecto {
//   titulo: string;
//   descripcion: string;
//   imagen: string;
//   url: string;
// }

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.sass'],

})
export class ProyectosComponent implements OnInit {


  // proyectos: Proyecto[] = [

  //     {
  //       titulo: 'Trivia',
  //       descripcion: 'Juego trivia que tiene opciones de cultura general y gastronomía',
  //       imagen: 'assets/image/trello.png',
  //       url: 'https://trivia-pre-admision.vercel.app/600x300?text=Trivia'
  //     },
  //     {
  //       titulo: 'Text Analyzer',
  //       descripcion: 'Contador de palabras, caracteres, suma, números y promedio de palabras',
  //       imagen: '',
  //       url:'https://yamilethreveca.github.io/DEV012-text-analyzer/600x300?text=Text+Analyzer'
  //     },
  //     {
  //       titulo: 'DataVerse',
  //       descripcion: 'Filtrado y organización de pokémon por elementos',
  //       imagen:'',
  //       url:'https://yamilethreveca.github.io/DEV012-dataverse/600x300?text=DataVerse'
  //     },
  //     {
  //       titulo: 'Dataverse Chat',
  //       descripcion: 'SPA, Filtrado de personajes de One Piece integrado con IA de OpenAI',
  //       imagen: '',
  //       url:'https://dataverse-chat.vercel.app/600x300?text=Dataverse+Chat'
  //     },
  //     {
  //       titulo: 'Movie Challenge con Angular',
  //       descripcion: 'Aplicación que permite ver listado de películas',
  //       imagen: '',
  //       url:'https://dataverse-chat.vercel.app/600x300?text=Movie+Challenge'
  //     },
  //     {
  //       titulo: 'Burger Queen API Client',
  //       descripcion: 'Aplicación diseñada para gestionar pedidos de comida',
  //       imagen: '',
  //       url:'https://burger-queen-api-client-self.vercel.app/600x300?text=Burger+Queen'
  //     },
  //     {
  //       titulo: 'Class Cloud',
  //       descripcion: 'Aplicación para administrar funciones administrativas de un colegio',
  //       imagen: '',
  //       url:'https://proyecto-no-country.vercel.app/600x300?text=Class+Cloud'
  //     },
  //     {
  //       titulo: 'Calculadora',
  //       descripcion: 'Aplicación realizada en JavaScript, es una calculadora básica',
  //       imagen: '',
  //       url:'https://proyecto-no-country.vercel.app/600x300?text=Calculadora'
  //     },
  //     {
  //       titulo: 'Credit Card Validator',
  //       descripcion: 'Proyecto en JavaScript que valida tarjetas con el método Luhn',
  //       imagen: '',
  //       url:'https://card-validation-fawn.vercel.app/600x300?text=Credit+Card+Validator'
  //     },
  //   ];


  // indiceActual = 0;

  // prev() {
  //   this.indiceActual = (this.indiceActual === 0) ? this.proyectos.length - 1 : this.indiceActual - 1;
  // }

  // next() {
  //   this.indiceActual = (this.indiceActual === this.proyectos.length - 1) ? 0 : this.indiceActual + 1;
  // }
  constructor() { }

  ngOnInit(): void { }


}


