import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from "../../shared/shared.module";

import { AriaAttributesRoutingModule } from './aria-attributes-routing.module';
import { AriaAttributesComponent } from './aria-attributes.component';


@NgModule({
  declarations: [
    AriaAttributesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AriaAttributesRoutingModule
  ]
})
export class AriaAttributesModule { }
