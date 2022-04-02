import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from "../../shared/shared.module";

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    FormsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormsModule { }
