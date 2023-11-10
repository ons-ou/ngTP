import { Injectable, inject } from '@angular/core';
import { Cv } from '../../models/cv';
import { Observable, Subject, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  http = inject(HttpClient);
  toaster = inject(ToastrService);

  router = inject(Router);

  cvs: Cv[] = [];

  private selectCv$: Subject<Cv> = new Subject();
  cv$: Observable<Cv>;

  constructor() {
    this.cv$ = this.selectCv$.asObservable();
  }

  selectCv(cv: Cv) {
    this.selectCv$.next(cv);
  }

  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>('https://apilb.tridevs.net/api/personnes').pipe(
      map((cvs) => {
        this.cvs = cvs;
        return cvs;
      }),
      catchError(() => {
        this.toaster.error('Erreur de récupération de donnés');
        return of([
          new Cv(1, 'sellaouti', 'aymen', 145, 'teacher', 'as.jpg', 45),
          new Cv(2, 'sellaouti', 'skander', 450, 'enfant', 'cv.png', 5),
          new Cv(2, 'Dhaouadi', 'yassine', 12, 'student', '', 21),
          new Cv(2, 'Mourali', 'sandra', 1, 'student', '', 23),
        ]);
      })
    );
  }

  getCv(id: number): Observable<Cv | null> {
    return this.http
      .get<Cv>('https://apilb.tridevs.net/api/personnes/' + id)
      .pipe(
        map((cv) => {
          return cv;
        }),
        catchError(() => {
          this.router.navigate([]);
          return of(null);
        })
      );
  }

  deleteCv(id: number) {
    this.http
      .delete<Cv>('https://apilb.tridevs.net/api/personnes/' + id)
      .subscribe({
        next: () => {
          this.router.navigate([]);
        },
        error: (err) => {
          this.toaster.error(`${err.status} - ${err.statusText}`);
        },
      });
  }
}
