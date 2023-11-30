import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HighlightDirective } from './directives/highlight/highlight.directive';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Nf404Component } from './components/nf404/nf404.component';
import { MiniWordComponent } from './components/mini-word/mini-word.component';
import { RainbowDirective } from './directives/rainbow/rainbow.directive';
import { TextInputComponent } from './components/text-input/text-input.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { RxJsComponent } from './components/rx-js/rx-js.component';
import { ProductComponent } from './product/compnents/product/product.component';
import { SharedModule } from './modules/shared/shared.module';
import { AuthInterceptor } from './modules/auth/interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    NavbarComponent,
    Nf404Component,
    MiniWordComponent,
    RainbowDirective,
    TextInputComponent,
    RxJsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
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
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
