import { Component, inject } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Cv } from '../../models/cv';
import { CvService } from '../../services/cv/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent {

  cvs$: Observable<Cv[]>
  cvService = inject(CvService);
  toaster = inject(ToastrService)

  constructor(){
    this.cvs$ = this.cvService.getCvs().pipe(
      catchError((res)=> {
        this.toaster.error('Erreur de récupération de donnés');
        return of(res);
      })
    )
  }
}
