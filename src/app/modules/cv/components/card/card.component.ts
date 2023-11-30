import { Component, Input, inject } from '@angular/core';
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
  
  @Input()
  cv!: Cv;
  cvService = inject(CvService);

  embaucheService = inject(EmbaucheService)

  constructor(){
  }

  onClick(cv: Cv){
    this.embaucheService.addCv(cv);
  }

}
