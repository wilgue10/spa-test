import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HackerNewLayoutComponent } from './layout/hacker-new-layout/hacker-new-layout.component';

const routes: Routes = [
  {
    path: '',
    component: HackerNewLayoutComponent,

    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/hacker-news/hacker-news.module').then(
            (m) => m.HackerNewsModule
          ),
      },
      {
        path: 'faves',
        loadChildren: () =>
          import('./modules/faves/faves.module').then(
            (m) => m.FavesModule
          ),
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
