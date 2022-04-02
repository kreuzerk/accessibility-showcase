import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeadingComponent} from "./heading/heading.component";
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  declarations: [HeadingComponent, ToggleComponent],
  exports: [HeadingComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
