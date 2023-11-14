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
    if (this.embauches.findIndex((c)=> c.id == cv.id) == -1){
      this.embauches.push(cv)
    } else {
      this.toast.warning(`Le candidat ${cv.firstname} ${cv.name} est déja embauché`)
    }
  }

  deleteCv(id: number){
    const index = this.embauches.findIndex((cv)=> cv.id == id)
    if (index !== -1)
      this.embauches.splice(index, 1)
  }
}
