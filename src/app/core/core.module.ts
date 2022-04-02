import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeadingComponent } from './heading/heading.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    SidenavComponent,
    HeadingComponent
  ],
  exports: [SidenavComponent, HeadingComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
