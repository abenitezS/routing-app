import { Component, OnInit ,inject} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {ProductosService } from '../../../../sevices/productos.service';
import { CurrencyPipe } from '@angular/common';
import { Producto } from '../../../models/producto';
@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './producto-detalle.html',
  styleUrl: './producto-detalle.css',
})
export class ProductoDetalle implements OnInit{
  producto : Producto | undefined;

  id = '';

private route = inject(ActivatedRoute)
private service = inject(ProductosService)
  errorMsg='';

 
ngOnInit(): void{
    //acceder al id del usuario de la url 
    this.route.params.subscribe((params) => {
      this.id = params['id'];

   
   const id_user_param=  this.route.snapshot.paramMap.get('id')
   if (id_user_param){
    const id= parseInt (id_user_param)
    this.producto=this.service.getProductoById(id); 
    if(!this.producto){
      this.errorMsg='Producto con ID #$(id) no encontrado'
    }
 
   
   else{
         this.errorMsg='Id del usuario no especificado'
  }
}
   
    });
  }
}
