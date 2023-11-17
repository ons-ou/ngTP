import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CvService } from '../../services/cv/cv.service';
import { Cv } from '../../models/cv';

export const cvResolver: ResolveFn<Cv[] | null> = (route, state) => {
  const cvService = inject(CvService);

  return cvService.getCvs();
};
