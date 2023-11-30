import { Component, Input, inject } from '@angular/core';
import { EmbaucheService } from '../../services/emauche/embauche.service';
import { Cv } from '../../models/cv';

@Component({
  selector: 'app-embauches',
  templateUrl: './embauches.component.html',
  styleUrl: './embauches.component.css'
})
export class EmbauchesComponent {

  @Input()
  embauches: Cv[] = []

}
