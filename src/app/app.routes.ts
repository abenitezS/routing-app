import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home')
        .then(c => c.Home)
  },
  {
    path: 'usuarios',
    loadComponent: () =>
      import('./components/usuarios/usuarios')
        .then(c => c.Usuarios)
  },
  {
    path: 'productos',
    loadComponent: () =>
      import('./components/productos/productos')
        .then(c => c.Productos)
  },
  {
    path: 'productos/:id',
    loadComponent: () =>
      import('./components/productos/producto-detalle/producto-detalle')
        .then(c => c.ProductoDetalle)
  },
  {
    path: '**',
    redirectTo: ''
  }
];