import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HighlightDirective } from './directives/highlight/highlight.directive';
import { DefaultImagePipe } from './pipes/default-image/default-image.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Nf404Component } from './components/nf404/nf404.component';
import { MiniWordComponent } from './components/mini-word/mini-word.component';
import { RainbowDirective } from './directives/rainbow/rainbow.directive';
import { TextInputComponent } from './components/text-input/text-input.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { CardComponent } from './cv/components/card/card.component';
import { CvComponent } from './cv/components/cv/cv.component';
import { DetailsComponent } from './cv/components/details/details.component';
import { EmbauchesComponent } from './cv/components/embauches/embauches.component';
import { ItemComponent } from './cv/components/item/item.component';
import { ListComponent } from './cv/components/list/list.component';
import { SearchComponent } from './cv/components/search/search.component';
import { RxJsComponent } from './components/rx-js/rx-js.component';
import { MasterDetailsComponent } from './cv/components/master-details/master-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    DefaultImagePipe,
    NavbarComponent,
    CvComponent,
    ListComponent,
    CardComponent,
    ItemComponent,
    Nf404Component,
    MiniWordComponent,
    RainbowDirective,
    TextInputComponent,
    EmbauchesComponent,
    DetailsComponent,
    LoginComponent,
    SearchComponent,
    RxJsComponent,
    MasterDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
