import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AriaAttributesComponent } from './aria-attributes.component';

const routes: Routes = [{ path: '', component: AriaAttributesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AriaAttributesRoutingModule { }
