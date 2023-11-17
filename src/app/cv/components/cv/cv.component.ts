import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cv } from '../../models/cv';
import { CvService } from '../../services/cv/cv.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  cvs: Cv[];
  juniors: Cv[];
  seniors: Cv[];
  cvService = inject(CvService);
  route = inject(ActivatedRoute);
  toaster = inject(ToastrService);

  constructor() {
    const cvs : Cv[] = this.route.snapshot.data['cvs'];

    this.juniors = cvs.filter((cv) => cv.age < 40);
    this.seniors = cvs.filter((cv) => cv.age >= 40);

    this.cvs = this.juniors;
  }

  showSeniors() {
    this.cvs = this.seniors;
  }

  showJuniors() {
    this.cvs = this.juniors;
  }

  onCvSelect(cv: Cv) {
    this.cvService.selectCv(cv);
  }
}
