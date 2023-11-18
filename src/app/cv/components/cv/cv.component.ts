import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cv } from '../../models/cv';
import { CvService } from '../../services/cv/cv.service';
import { ActivatedRoute } from '@angular/router';
import { EmbaucheService } from '../../services/emauche/embauche.service';
import { Observable } from 'rxjs';

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

  
  date = new Date()

  constructor() {
    const cvs : Cv[] = this.route.snapshot.data['cvs'];
    this.embauches$ = this.embaucheService.embauches$;

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
