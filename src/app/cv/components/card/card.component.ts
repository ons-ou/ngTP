import { Component, inject } from '@angular/core';
import { Cv } from '../../models/cv';
import { CvService } from '../../services/cv/cv.service';
import { Observable } from 'rxjs';
import { EmbaucheService } from '../../services/emauche/embauche.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  
  cv$: Observable<Cv>;
  cvService = inject(CvService);

  embaucheService = inject(EmbaucheService)

  constructor(){
    this.cv$ = this.cvService.cv$;
  }

  onClick(cv: Cv){
    this.embaucheService.addCv(cv);
  }

}
