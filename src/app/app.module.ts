import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { DefaultImagePipe } from './pipes/default-image/default-image.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CvComponent } from './components/cv/cv/cv.component';
import { ListComponent } from './components/cv/list/list.component';
import { CardComponent } from './components/cv/card/card.component';
import { ItemComponent } from './components/cv/item/item.component';
import { Nf404Component } from './components/nf404/nf404.component';
import { MiniWordComponent } from './components/mini-word/mini-word.component';
import { RainbowDirective } from './directives/rainbow/rainbow.directive';
import { TextInputComponent } from './components/text-input/text-input.component';
import { EmbauchesComponent } from './components/cv/embauches/embauches.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { DetailsComponent } from './components/cv/details/details.component';
import { EmbaucheItemComponent } from './components/cv/embauche-item/embauche-item.component';
import { LoginComponent } from './components/login/login.component';


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
    EmbaucheItemComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
