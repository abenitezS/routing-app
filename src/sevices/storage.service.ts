import { Injectable } from '@angular/core';
import { Productos } from '../app/components/productos/productos';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
 guardarRuta(ruta: string) {
    localStorage.setItem('ultimaRuta', ruta);
  }

  obtenerRuta() {
    return localStorage.getItem('ultimaRuta');
  }
  obtenerProductoPorId(id: number) {
    let producto = {
id: 0,
nombre: '',
precio: 0,
Descripcion: '', 
 imagen: '',
modelo: '',
marca: '',
stock: 0
};
    const productos = new Productos().productos;    
    const found = productos.find((p) => p.id === id);
    producto = found ? found : {id: 0,
nombre: '',
precio: 0,
Descripcion: '', 
 imagen: '',
modelo: '',
marca: '',
stock: 0};
    return producto;
  }
}
