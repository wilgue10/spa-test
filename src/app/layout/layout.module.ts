import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HackerNewLayoutComponent } from './hacker-new-layout/hacker-new-layout.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    HackerNewLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule
  ]
})
export class LayoutModule { }
