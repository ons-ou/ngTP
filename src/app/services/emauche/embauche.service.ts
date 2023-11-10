import { Injectable } from '@angular/core';
import { Cv } from '../../models/cv';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  toast = inject(ToastrService)
  embauches: Cv[] = []
  
  constructor() { }

  getCvs(){
    return this.embauches;
  }

  addCv( cv: Cv){
    if (this.embauches.indexOf(cv) == -1){
      this.embauches.push(cv)
    } else {
      this.toast.warning(`Le candidat ${cv.firstname} ${cv.name} est déja embauché`)
    }
  }
}
