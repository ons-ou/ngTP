import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Cv } from '../../../models/cv';
import { CvService } from '../../../services/cv/cv.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  cvService = inject(CvService);
  toaster = inject(ToastrService)
  cvs: Cv[] = [];

  isHidden = true;

  constructor() {}

  ngOnInit() {
    this.cvService.getCvs().subscribe(
       (cvs: Cv[]) => {
        this.cvs = cvs;
      },
    );
  }

  showHide() {
    this.isHidden = !this.isHidden;
  }
}
