import { Component, inject } from '@angular/core';
import { CvService } from '../../services/cv/cv.service';
import { Observable, catchError, of, tap } from 'rxjs';
import { Cv } from '../../models/cv';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  cvService = inject(CvService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  toaster = inject(ToastrService);

  cv$: Observable<Cv | null>;

  constructor() {
    this.cv$ = this.cvService.getCv(this.route.snapshot.params['id']).pipe(
      catchError(() => {
        this.toaster.error('Aucun cv trouvé');
        this.router.navigate(['']);
        return of(null);
      })
    );
  }

  onClick() {
    const id = this.route.snapshot.params['id'];
    this.cvService
      .deleteCv(id)
      .subscribe({
        next: () => {
          this.router.navigate(['cv']);
        },
        error: (err) => {
          if (err.status == 0) this.cvService.handleDeleteError(id);
          else this.toaster.error(`Erreur - ${err.status} ${err.statusText}`);
          return of(null);
        },
      });
  }
}
