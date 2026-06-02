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
      precio: 3568000.45,
      imagen: 'assets/notebook.png',
      Descripcion : 'Una notebook potente y ligera, ideal para trabajar y estudiar.',
      modelo : 'XPS 13',
      marca : 'Dell',
      stock : 10  

    },
    {
      id: 2,
      nombre: 'Mouse',
      precio: 50000.99,
      imagen: "assets/mouse.jpg",
      Descripcion : 'Un mouse ergonómico con alta precisión, perfecto para largas horas de uso.', 
      modelo : 'MX Master 3',
      marca : 'Logitech',
      stock : 25
    },
    {
      id: 3,
      nombre: 'Teclado',
      precio: 90000.75,
      imagen: "assets/teclado.png",
      Descripcion : 'Un teclado mecánico con retroiluminación RGB, ideal para gamers y programadores.',     
      modelo : 'K95 RGB Platinum',
      marca : 'Corsair',
      stock : 15  
    }
  ];

}
