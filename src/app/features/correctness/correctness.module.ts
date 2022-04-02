import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from "../../shared/shared.module";

import { CorrectnessRoutingModule } from './correctness-routing.module';
import { CorrectnessComponent } from './correctness.component';


@NgModule({
  declarations: [
    CorrectnessComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CorrectnessRoutingModule
  ]
})
export class CorrectnessModule { }
