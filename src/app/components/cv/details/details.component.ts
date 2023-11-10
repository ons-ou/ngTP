import { Component, inject } from '@angular/core';
import { CvService } from '../../../services/cv/cv.service';
import { Observable } from 'rxjs';
import { Cv } from '../../../models/cv';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  cvService = inject(CvService)
  route = inject(ActivatedRoute)

  cv$ : Observable<Cv | null>;

  constructor(){
    this.cv$ = this.cvService.getCv(this.route.snapshot.params['id'])
  }

  onClick(){
    this.cvService.deleteCv(this.route.snapshot.params['id'])
  }

}
