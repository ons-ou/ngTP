import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './components/item/item.component';



@NgModule({
  declarations: [
    ItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: 
  [ItemComponent]
})
export class SharedModule { }
