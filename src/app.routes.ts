import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./app/pages/home/home')
        .then(c => c.Home)
  },
  {
    path: 'usuarios',
    loadComponent: () =>
      import('./app/pages/usuarios/usuarios/usuarios')
        .then(c => c.Usuarios)
  },
  {
    path: 'productos',
    loadComponent: () =>
      import('./app/pages/productos/productos/productos')
        .then(c => c.Productos)
  },
  {
    path: 'productos/:id',
    loadComponent: () =>
      import('./app/pages/productos/producto-detalle/producto-detalle')
        .then(c => c.ProductoDetalle)
  },
  {
    path: '**',
    redirectTo: ''
  }
];