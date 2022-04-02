import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: 'images',
  loadChildren: () => import('./features/images/images.module').then(m => m.ImagesModule)
}, {path: 'contrast', loadChildren: () => import('./features/contrast/contrast.module').then(m => m.ContrastModule)},
  { path: 'aria-attributes', loadChildren: () => import('./features/aria-attributes/aria-attributes.module').then(m => m.AriaAttributesModule) },
  { path: 'forms', loadChildren: () => import('./features/forms/forms.module').then(m => m.FormsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
