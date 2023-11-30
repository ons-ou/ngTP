import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Cv } from '../../models/cv';
import { CvService } from '../../services/cv/cv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Input()
  cvs: Cv[] | null = []

  @Input()
  switchItemColor = true

  cvService = inject(CvService);
  router = inject(Router)

  isHidden = true;

  constructor() {
  }

  showHide() {
    this.isHidden = !this.isHidden;
  }
}
