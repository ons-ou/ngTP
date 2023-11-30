import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvRoutingModule } from './cv-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './components/card/card.component';
import { CvComponent } from './components/cv/cv.component';
import { DetailsComponent } from './components/details/details.component';
import { EmbauchesComponent } from './components/embauches/embauches.component';
import { ListComponent } from './components/list/list.component';
import { MasterDetailsComponent } from './components/master-details/master-details.component';
import { SearchComponent } from './components/search/search.component';
import { DefaultImagePipe } from './pipes/default-image/default-image.pipe';
import { SharedModule } from '../shared/shared.module';
import { AddComponent } from './components/add/add.component';

@NgModule({
  declarations: [
    CardComponent,
    CvComponent,
    DetailsComponent,
    EmbauchesComponent,
    ListComponent,
    MasterDetailsComponent,
    SearchComponent,   
    DefaultImagePipe, AddComponent 
  ],
  imports: [
    CommonModule,
    SharedModule,
    CvRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ]
})
export class CvModule { }
