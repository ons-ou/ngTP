import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Nf404Component } from './components/nf404/nf404.component';
import { MiniWordComponent } from './components/mini-word/mini-word.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { LoginComponent } from './components/login/login.component';
import { CvComponent } from './cv/components/cv/cv.component';
import { DetailsComponent } from './cv/components/details/details.component';
import { RxJsComponent } from './components/rx-js/rx-js.component';
import { cvResolver } from './cv/resolvers/cv/cv.resolver';
import { detailsResolver } from './cv/resolvers/details/details.resolver';
import { MasterDetailsComponent } from './cv/components/master-details/master-details.component';
import { ProductComponent } from './product/compnents/product/product.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductComponent
  },
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent, resolve: { cvs: cvResolver } },
      {
        path: 'list',
        component: MasterDetailsComponent,
        children: [
          {
            path: ':id',
            component: DetailsComponent,
            resolve: { cv: detailsResolver },
          },
        ],
      },
      {
        path: ':id',
        component: DetailsComponent,
        resolve: { cv: detailsResolver },
      },

    ],
  },
  {
    path: 'mini-word',
    component: MiniWordComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
