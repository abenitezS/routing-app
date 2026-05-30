import { Injectable } from '@angular/core';

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
}
