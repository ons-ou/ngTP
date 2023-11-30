import { Component, HostListener, inject } from '@angular/core';
import { Cv } from '../../models/cv';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CvService } from '../../services/cv/cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, of, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  cv = new Cv();
  cvForm: FormGroup;

  cvService = inject(CvService);
  route = inject(ActivatedRoute);
  toast = inject(ToastrService);
  router = inject(Router)

  id: number;

  constructor(private fb: FormBuilder) {
    this.id = this.route.snapshot.params['id'];
    if (this.id)
      this.cvService
        .getCv(this.id)
        .subscribe((c) => (c ? (this.cv = c) : (this.cv = new Cv())));

    this.cvForm = new FormGroup({
      name: new FormControl(this.cv.name, Validators.required),
      firstname: new FormControl(this.cv.firstname, Validators.required),
      age: new FormControl(this.cv.age, [
        Validators.required,
        Validators.min(16),
      ]),
      path: new FormControl(this.cv.path),
      job: new FormControl(this.cv.job),
    });
  }

  onSubmit() {
    if (this.id)
      this.cvService.updateCv(this.cvForm.value).subscribe({
        next: () => {
          this.toast.success("Cv modifié avec succès")
          this.router.navigate(['cv', this.id]);
        },
        error: (err) => {
          this.toast.error(`Erreur - ${err.status} ${err.statusText}`);
          return of(null);
        },
      });   
    else this.cvService.addCv(this.cvForm.value).subscribe({
      next: () => {
        this.toast.success("Cv ajouté avec succès")
        this.cvForm.reset();
      },
      error: (err) => {
        this.toast.error(`Erreur - ${err.status} ${err.statusText}`);
        return of(null);
      },
    });;
  }

  @HostListener("window:beforeunload")
  canDeactivate(){
    if (this.cvForm.dirty){
      window.confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true;
  }
}
