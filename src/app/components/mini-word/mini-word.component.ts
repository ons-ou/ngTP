import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrl: './mini-word.component.css',

})
export class MiniWordComponent {

  color = "black"
  font ="Arial"
  size = 15
  fontOptions: string[] = [
    'Arial',
    'Helvetica',
    'Times New Roman',
    'Courier New',
    'Verdana',
    'Georgia',
    'Palatino',
    'Garamond',
    'Bookman',
    'Comic Sans MS'
  ];
}
