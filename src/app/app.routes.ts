import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home')
        .then(c => c.Home)
  },
  {
    path: 'usuarios',
    loadComponent: () =>
      import('./pages/usuarios/usuarios/usuarios')
        .then(c => c.Usuarios)
  },
  {
    path: 'productos',
    loadComponent: () =>
      import('./pages/productos/productos/productos')
        .then(c => c.Productos)
  },
  {
    path: 'productos/:id',
    loadComponent: () =>
      import('./pages/productos/producto-detalle/producto-detalle')
        .then(c => c.ProductoDetalle)
  },
  {
    path: '**',
    redirectTo: ''
  }
];