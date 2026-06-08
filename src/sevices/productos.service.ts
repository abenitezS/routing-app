import { Injectable , inject } from '@angular/core';


import { Producto } from '../app/models/producto';
import { __param } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class ProductosService{

  private productos: Producto[] = [

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
  ]


   

getProductoById (id:number):Producto|undefined
{
   return this.productos.find( (producto) =>producto.id === id)
    
}
  //Metodo para obtener la lista de usuarios
  getProducts(){
    //Creo un nuevo array con los valores de mi lista de productos para romper la referencia
    return [...this.productos]
  }

}