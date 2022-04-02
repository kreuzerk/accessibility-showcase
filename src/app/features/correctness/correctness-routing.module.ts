import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorrectnessComponent } from './correctness.component';

const routes: Routes = [{ path: '', component: CorrectnessComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorrectnessRoutingModule { }
