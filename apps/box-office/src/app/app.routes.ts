import { Route } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

export const appRoutes: Route[] = [
  {
    path: 'movies',
    loadChildren: () =>
      import('./movies/movies.module').then((m) => m.MoviesModule),
  },
  {
    path: 'screens',
    loadChildren: () =>
    import('./screens/screens.module').then((m) => m.ScreensModule),
  },
  {
    path: 'sales',
    loadChildren: ()=>
    import('./sales/sales.module').then((s)=> s.SalesModule),
  },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', component: WelcomeComponent },
];
