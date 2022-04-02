import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeadingComponent } from './heading/heading.component';

@NgModule({
  declarations: [
    SidenavComponent,
    HeadingComponent
  ],
  exports: [SidenavComponent, HeadingComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
