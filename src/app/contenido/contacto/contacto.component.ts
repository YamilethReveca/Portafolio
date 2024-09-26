import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.sass']
})
export class ContactoComponent implements OnInit {


  celular: string = '+56930379851'; // Reemplaza con tu número
  email: string = 'yamilethcaldera@gmail.com'; // Reemplaza con tu correo
  linkedin: string = 'https://www.linkedin.com/in/yamilethcaldera/'; // Reemplaza con tu perfil de LinkedIn
  constructor() { }

  ngOnInit(): void {
  }

}
