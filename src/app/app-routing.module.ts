import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './components/cv/cv/cv.component';
import { Nf404Component } from './components/nf404/nf404.component';
import { MiniWordComponent } from './components/mini-word/mini-word.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { DetailsComponent } from './components/cv/details/details.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      { path: ':id', component: DetailsComponent },
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
