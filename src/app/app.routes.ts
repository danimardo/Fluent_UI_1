import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'menu',
    loadComponent: () =>
      import('./componentes/menu/menu.component').then((m) => m.MenuComponent),
  },
  {
    path: 'listado',
    loadComponent: () =>
      import('./componentes/listado-reddit/listado-reddit.component').then((m) => m.ListadoRedditComponent),
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full',
  },


];
