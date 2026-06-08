import { Component, OnInit, inject} from '@angular/core';
import { Router, RouterOutlet, RouterLink, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { StorageService } from '../sevices/storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'

})
export class App implements OnInit{
private router =inject(Router);
private storage= inject(StorageService)
//Al cargar la App quiero la ultima direccion visitada
ngOnInit(): void {
  //obtner la ultima ruta 
    const ultimaRuta = this.storage.obtenerRuta();
//si existe la alguna ruta previa y no es la princial ir a esa ruta 
    if (ultimaRuta && ultimaRuta!=='/') {
      this.router.navigateByUrl(ultimaRuta);
    }
//solo me interesa enterarme del evento de cierre de navegacion 
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: any) => {
        //la ultima direccion la guardamos en localstorage
        this.storage.guardarRuta(event.urlAfterRedirects);
      });

  }

}