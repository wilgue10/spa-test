import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavesComponent } from './faves.component';
import { Route, RouterModule } from '@angular/router';

const hackerRoutes: Route[] = [
  {
    path: '',
    component: FavesComponent,
  },
];

@NgModule({
  declarations: [
    FavesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(hackerRoutes),
  ]
})
export class FavesModule { }
