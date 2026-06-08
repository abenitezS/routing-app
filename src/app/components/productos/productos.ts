import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductosService } from '../../../sevices/productos.service';
import { Producto } from '../../models/producto';
import { inject } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  
  productosList: Producto[] = [];

  //Forma de instanciar mi servicio EN ESTE COMPONENTE
  //inject a partir de angular +17
  private productoService = inject(ProductosService)

  //Se activa cuando el componente se inicializo
  ngOnInit(): void{
    this.cargarProductos()
  }

  //Como cargar usuarios del servicio al componente
  cargarProductos(): void {
    this.productosList = this.productoService.getProducts()
  }

}
