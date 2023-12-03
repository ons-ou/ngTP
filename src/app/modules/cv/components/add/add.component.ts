import { Component, HostListener, inject } from '@angular/core';
import { Cv } from '../../models/cv';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CvService } from '../../services/cv/cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  cvForm!: FormGroup;

  cvService = inject(CvService);
  route = inject(ActivatedRoute);
  toast = inject(ToastrService);
  router = inject(Router);

  id: number;

  constructor(private fb: FormBuilder) {
    let cv$: Observable<Cv>;
    this.id = this.route.snapshot.params['id'];
    if (this.id)
      cv$ = this.cvService.getCv(this.id).pipe(map((c) => (c ? c : new Cv())));
    else cv$ = of(new Cv());

    cv$.subscribe((c) => {
      this.cvForm = new FormGroup({
        name: new FormControl(c.name, Validators.required),
        firstname: new FormControl(c.firstname, Validators.required),
        age: new FormControl(c.age, [Validators.required, Validators.min(16)]),
        path: new FormControl(c.path),
        job: new FormControl(c.job),
      });
    });
  }

  onSubmit() {
    let changeCv$;
    if (this.id)
      changeCv$ = this.cvService.updateCv(this.cvForm.value).pipe(
        tap(() => {
          this.toast.success('Cv modifié avec succès');
          this.router.navigate(['cv', this.id]);
        })
      );
    else
      changeCv$ = this.cvService.addCv(this.cvForm.value).pipe(
        tap(() => {
          this.toast.success('Cv ajouté avec succès');
          this.cvForm.reset();
        })
      );

    changeCv$ = changeCv$.pipe(
      catchError((err) => {
        this.toast.error(`Erreur - ${err.status} ${err.statusText}`);
        return of(null);
      })
    );

    changeCv$.subscribe();
  }

  @HostListener('window:beforeunload')
  canDeactivate() {
    if (this.cvForm.dirty) {
      window.confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true;
  }
}
