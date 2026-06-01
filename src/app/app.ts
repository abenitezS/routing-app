import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { StorageService } from '../sevices/storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: '../styles.css'

})
export class App {

  constructor(
    private router: Router,
    private storage: StorageService
  ) {

    const ultimaRuta = this.storage.obtenerRuta();

    if (ultimaRuta) {
      this.router.navigateByUrl(ultimaRuta);
    }

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: any) => {
        this.storage.guardarRuta(event.urlAfterRedirects);
      });

  }

}