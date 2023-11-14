import { Injectable, inject } from '@angular/core';
import { Cv } from '../../models/cv';
import { Observable, Subject, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { EmbaucheService } from '../emauche/embauche.service';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  http = inject(HttpClient);
  embaucheService = inject(EmbaucheService)

  cvs: Cv[] = [
    new Cv(1, 'sellaouti', 'aymen', 145, 'teacher', 'as.jpg', 45),
    new Cv(2, 'sellaouti', 'skander', 450, 'enfant', 'cv.png', 5),
    new Cv(3, 'Dhaouadi', 'yassine', 12, 'student', '', 21),
    new Cv(4, 'Mourali', 'sandra', 1, 'student', '', 23),
  ];

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
        return of(this.cvs);
      })
    );
  }

  getCv(id: number): Observable<Cv | null> {
    return this.http
      .get<Cv>('https://apilb.tridevs.net/api/personnes/' + id)
      .pipe(
        map((cv) => cv),
        catchError((err) => {
          if (err.status == 0) {
            const cv = this.cvs.find((cv) => cv.id == id);
            if (cv) return of(cv);
          }
          return of(null);
        })
      );
  }

   handleDeleteError(id: number): void {
    const index = this.cvs.findIndex((cv) => cv.id === id);
    if (index !== -1) {
      this.cvs.splice(index, 1);
    }
    this.embaucheService.deleteCv(id);
  }

  deleteCv(id: number) : Observable<any> {
    return this.http
      .delete('https://apilb.tridevs.net/api/personnes/' + id)
  }
}
