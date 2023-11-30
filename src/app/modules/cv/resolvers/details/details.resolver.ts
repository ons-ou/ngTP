import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { CvService } from '../../services/cv/cv.service';
import { Cv } from '../../models/cv';

export const detailsResolver: ResolveFn<Cv | null> = (route, state) => {
  const cvService = inject(CvService);
  const id = route.params['id'];

  return cvService.getCv(id).pipe(
    map((cv)=> cv),
    catchError(() => {
      return of(null);
    })
  );
};
