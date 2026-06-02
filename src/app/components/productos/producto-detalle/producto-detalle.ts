import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,RouterLink } from '@angular/router';


@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './producto-detalle.html',
  styleUrl: './producto-detalle.css',
})

export class ProductoDetalle {

  id = '';

  constructor(private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

  }

}