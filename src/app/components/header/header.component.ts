import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {


  menuVisible = false;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  constructor() {

  }

  ngOnInit(): void {
  }




}
