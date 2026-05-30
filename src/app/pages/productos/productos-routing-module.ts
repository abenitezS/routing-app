import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Productos } from './productos/productos';
import { ProductoDetalle } from './producto-detalle/producto-detalle';

const routes: Routes = [
  {
    path: '',
    component: Productos
  },
  {
    path: ':id',
    component: ProductoDetalle
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosRoutingModule { }
