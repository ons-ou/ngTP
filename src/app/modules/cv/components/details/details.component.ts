import { Component, inject } from '@angular/core';
import { CvService } from '../../services/cv/cv.service';
import { of } from 'rxjs';
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
  showSearch = false

  cv: Cv = new Cv();

  constructor() {
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
