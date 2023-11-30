import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cv } from '../../models/cv';
import { CvService } from '../../services/cv/cv.service';
import { ActivatedRoute } from '@angular/router';
import { EmbaucheService } from '../../services/emauche/embauche.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  cvs: Cv[];
  juniors: Cv[];
  seniors: Cv[];
  embauches$: Observable<Cv[]>;
  cvService = inject(CvService);
  embaucheService = inject(EmbaucheService);
  route = inject(ActivatedRoute);
  cv$: Observable<Cv>

  
  date = new Date()

  constructor() {
    const cvs = this.route.snapshot.data['cvs'];
    this.embauches$ = this.embaucheService.embauches$;

    this.juniors = cvs.juniors;
    this.seniors = cvs.seniors;

    this.cvs = this.juniors;

    this.cv$ = this.cvService.cv$
  }

  setCvs(cvs: Cv[]) {
    this.cvs = cvs;
  }
}
