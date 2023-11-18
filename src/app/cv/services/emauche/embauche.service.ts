import { Injectable } from '@angular/core';
import { Cv } from '../../models/cv';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  toast = inject(ToastrService)
 
  getEmbauches$ = new BehaviorSubject<Cv[]>([]);
  embauches$ : Observable<Cv[]>;
  
  constructor() { 
    this.embauches$ = this.getEmbauches$.asObservable()
  }

  getCvs(){
    return this.getEmbauches$.value;
  }

  addCv( cv: Cv){
    var embauches = this.getEmbauches$.value
    if (embauches.findIndex((c)=> c.id == cv.id) == -1){
      embauches = [...embauches, cv]
      this.getEmbauches$.next(embauches);
      
      this.toast.success(`Le candidat ${cv.firstname} ${cv.name} a été ajouté`)
    } else {
      this.toast.warning(`Le candidat ${cv.firstname} ${cv.name} est déja embauché`)
    }
  }

  deleteCv(id: number){
    var embauches = this.getEmbauches$.value
    const index = embauches.findIndex((cv)=> cv.id == id)
    if (index !== -1)
      embauches.splice(index, 1)
  }
}
