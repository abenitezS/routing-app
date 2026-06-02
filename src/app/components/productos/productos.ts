import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  
  productos = [
    {
      id: 1,
      nombre: 'Notebook',
      precio: 1200
    },
    {
      id: 2,
      nombre: 'Mouse',
      precio: 50
    },
    {
      id: 3,
      nombre: 'Teclado',
      precio: 90
    }
  ];

}
