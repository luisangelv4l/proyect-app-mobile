import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    // Ruta para la nueva página de login
    path: 'login',
    // CORRECCIÓN: Cambiado de loadComponent a loadChildren
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    // Ruta para tu navegación de pestañas (tabs)
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    // Ruta por defecto: redirige a 'login'
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

