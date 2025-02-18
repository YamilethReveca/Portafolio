
import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.sass'],

})

export class ProyectosComponent{

  @ViewChild('track') track!: ElementRef;

  proyectos = [
    { nombre: "Trivia Pre Admisión", link: "https://trivia-pre-admision.vercel.app/", imagen: "assets/imagen/proyecto-1.jpg" },
    { nombre: "Text Analyzer", link: "https://yamilethreveca.github.io/DEV012-text-analyzer/", imagen: "assets/imagen/proyecto-2.png" },
    { nombre: "Dataverse", link: "https://yamilethreveca.github.io/DEV012-dataverse/", imagen: "assets/imagen/proyecto-3.jpg" },
    { nombre: "Dataverse Chat", link: "https://dataverse-chat.vercel.app/", imagen: "assets/imagen/proyecto-4.jpg" },
    { nombre: "Movie Challenge", link: "https://movie-challenge-con-framework.vercel.app/", imagen: "assets/imagen/proyecto-5.jpg" },
    { nombre: "Burger Queen", link: "https://burger-queen-api-client-self.vercel.app/", imagen: "assets/imagen/proyecto-6.jpg" },
    { nombre: "Calculadora Personal", link: "https://calculadora-personal.vercel.app/", imagen: "assets/imagen/proyecto-7.jpg" },
    { nombre: "Card Validation", link: "https://card-validation-fawn.vercel.app/", imagen: "assets/imagen/credit_card.png" },
    { nombre: "No Country", link: "https://proyecto-no-country.vercel.app/", imagen: "assets/imagen/class.jpg" }
  ];

  currentIndex = 0;
  visibleItems = 4; // Ajusta el número de elementos visibles
  itemWidth = 0;

  ngAfterViewInit() {
    this.updateItemWidth();
    this.moveToIndex(0);
  }

  updateItemWidth() {
    const trackElement = this.track.nativeElement as HTMLElement;
    this.itemWidth = trackElement.scrollWidth / this.proyectos.length;
  }

  moveToIndex(index: number) {
    const maxIndex = this.proyectos.length - this.visibleItems;
    this.currentIndex = Math.max(0, Math.min(index, maxIndex));
    this.track.nativeElement.style.transform = `translateX(-${this.currentIndex * this.itemWidth}px)`;
  }


  next() {
    this.moveToIndex(this.currentIndex + 1);
  }

  prev() {
    this.moveToIndex(this.currentIndex - 1);
  }
  getDotsArray(): number[] {
    return Array.from({ length: Math.ceil(this.proyectos.length / this.visibleItems) }, (_, i) => i);
  }

  getCurrentDotIndex(): number {
    return Math.round(this.currentIndex / this.visibleItems);
  }
}


