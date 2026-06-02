import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { StorageService } from '../../../../sevices/storage.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './producto-detalle.html',
  styleUrl: './producto-detalle.css',
})
export class ProductoDetalle {
  producto = {
    id: 0,
    nombre: '',
    precio: 0,
    imagen: '',
    Descripcion: '',
    modelo: '',
    marca: '',
    stock: 0,
  };

  id = '';

  constructor(
    private route: ActivatedRoute,
    private storageService: StorageService,
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];

      this.producto = this.storageService.obtenerProductoPorId(Number(this.id));
    });
  }
}
