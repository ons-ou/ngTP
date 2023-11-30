import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './components/cv/cv.component';
import { DetailsComponent } from './components/details/details.component';
import { MasterDetailsComponent } from './components/master-details/master-details.component';
import { cvResolver } from './resolvers/cv/cv.resolver';
import { detailsResolver } from './resolvers/details/details.resolver';
import { AddComponent } from './components/add/add.component';
import { authGuard } from '../auth/guards/auth.guard';
import { unsavedChangesGuard } from './guards/unsaved-changes.guard';

const routes: Routes = [
  { path: '', component: CvComponent, resolve: { cvs: cvResolver } },
  {
    path: 'add',
    component: AddComponent,
    canDeactivate: [unsavedChangesGuard],
    canActivate: [authGuard],
  },
  {
    path: 'update/:id',
    component: AddComponent,
    canActivate: [authGuard],
    canDeactivate: [unsavedChangesGuard]
  },
      {
        path: 'list',
        component: MasterDetailsComponent,
        children: [
          {
            path: ':id',
            component: DetailsComponent,
            data: {
              search: false
            },
            resolve: { cv: detailsResolver },
          },
        ],
      },
      {
        path: ':id',
        data: {
          search: true
        },
        component: DetailsComponent,
        resolve: { cv: detailsResolver },
      },
      
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvRoutingModule { }
