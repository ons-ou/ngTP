import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Nf404Component } from './components/nf404/nf404.component';
import { MiniWordComponent } from './components/mini-word/mini-word.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { RxJsComponent } from './components/rx-js/rx-js.component';
import { AuthModule } from './modules/auth/auth.module';
import { ProductComponent } from './product/compnents/product/product.component';
import { PreloadingStrategy } from './strategy/preloading-strategy.service';

const routes: Routes = [
  {
    path: 'products',
    component: ProductComponent,
  },
  {
    path: 'cv',
    loadChildren: () =>
      import('./modules/cv/cv.module').then((m) => m.CvModule),
      data: {preload: true}
  },
  {
    path: 'mini-word',
    component: MiniWordComponent,
  },
  {
    path: 'auth',
    loadChildren: ()=> import('./modules/auth/auth.module').then((m)=> m.AuthModule),
  },
  {
    path: 'rxjs',
    component: RxJsComponent,
  },
  {
    path: 'directive',
    component: TextInputComponent,
  },
  { path: '**', component: Nf404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadingStrategy
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
