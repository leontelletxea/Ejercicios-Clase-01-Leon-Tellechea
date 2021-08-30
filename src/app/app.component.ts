import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TITULO';
  edadUno: number;
  edadDos: number;
  promedio: number;
  suma: number;

  constructor() {
    this.edadUno = 0;
    this.edadDos = 0;
    this.promedio = 0;
    this.suma = 0;
  }
  Calcular() {
    this.promedio = ((this.edadUno + this.edadDos) / 2);
    this.suma = this.edadUno + this.edadDos;
  }

  Limpiar() {
    this.title = 'TITULO';
    this.edadUno = 0;
    this.edadDos = 0;
    this.promedio = 0;
    this.suma = 0;
  }
}

export class Usuario {
  nombre:string;
  clave:string;

  constructor(){
    this.nombre = "";
    this.clave = "";
  }
}