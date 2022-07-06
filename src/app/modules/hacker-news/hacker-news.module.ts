import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { HackerNewsComponent } from './hacker-news.component';


const hackerRoutes: Route[] = [
  {
    path: '',
    component: HackerNewsComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(hackerRoutes),
  ]
})
export class HackerNewsModule { }
