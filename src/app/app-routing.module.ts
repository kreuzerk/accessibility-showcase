import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: 'images',
  loadChildren: () => import('./features/images/images.module').then(m => m.ImagesModule)
}, {path: 'contrast', loadChildren: () => import('./features/contrast/contrast.module').then(m => m.ContrastModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
