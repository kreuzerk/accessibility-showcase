import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContrastRoutingModule } from './contrast-routing.module';
import { ContrastComponent } from './contrast.component';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    ContrastComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContrastRoutingModule
  ]
})
export class ContrastModule { }
