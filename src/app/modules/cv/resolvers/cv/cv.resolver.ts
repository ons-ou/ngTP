import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CvService } from '../../services/cv/cv.service';
import { Cv } from '../../models/cv';
import { map } from 'rxjs';

export const cvResolver: ResolveFn<{ juniors: Cv[]; seniors: Cv[]; }> = (route, state) => {
  const cvService = inject(CvService);

  return cvService.getCvs().pipe(
    map(
      (cvs)=>{
        const juniors = cvs.filter((cv) => cv.age < 40);
        const seniors = cvs.filter((cv) => cv.age >= 40);
        return {juniors, seniors}
      }
    )
  );
};
