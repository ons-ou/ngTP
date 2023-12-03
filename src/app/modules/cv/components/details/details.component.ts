import { Component, inject } from '@angular/core';
import { CvService } from '../../services/cv/cv.service';
import { Observable, of } from 'rxjs';
import { Cv } from '../../models/cv';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../auth/services/auth/auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  authService = inject(AuthService);

  cvService = inject(CvService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  toaster = inject(ToastrService);
  showSearch = false

  isLoggedIn$ : Observable<boolean>

  cv: Cv = new Cv();

  constructor() {
    this.isLoggedIn$ = this.authService.isLoggedIn$

    this.route.data.subscribe((data) => {
      if (data['cv'] == null) {
        this.toaster.error('Aucun cv trouvé');
        this.router.navigate(['']);
      }
      this.cv = data['cv'];
      
      this.showSearch = data['search']
    });
  
  }

  onClick() {
    const id = this.route.snapshot.params['id'];
    this.cvService.deleteCv(id).subscribe({
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
