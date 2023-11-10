import { Component, Input } from '@angular/core';
import { Cv } from '../../../models/cv';

@Component({
  selector: 'app-embauche-item',
  templateUrl: './embauche-item.component.html',
  styleUrl: './embauche-item.component.css'
})
export class EmbaucheItemComponent {

  @Input({
    required: true
  })
  cv: Cv | null = null;

  constructor(){

  }
}
