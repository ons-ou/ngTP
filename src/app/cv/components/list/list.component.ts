import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Cv } from '../../models/cv';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Input()
  cvs: Cv[] | null = []

  @Input()
  onItemClick!: (cv: Cv)=>void;

  @Input()
  switchItemColor = true

  isHidden = true;

  constructor() {
  }

  showHide() {
    this.isHidden = !this.isHidden;
  }
}
