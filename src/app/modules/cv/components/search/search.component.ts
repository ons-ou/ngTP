import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs';
import { CvService } from '../../services/cv/cv.service';
import { Cv } from '../../models/cv';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchName = new FormControl();
  cvs$: Observable<Cv[]> = new Observable(); 
  cvService = inject(CvService);
  router = inject(Router)
  cv$: Subscription

  constructor(){
    this.cvs$ = this.searchName.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(searchTerm => this.cvService.getCvsByName(searchTerm))
    );

    this.cv$ = this.cvService.cv$.pipe(
      tap((cv)=>this.router.navigate(['cv', cv.id]))
    ).subscribe()
    }

    ngOnDestroy(){
      this.cv$.unsubscribe()
    }
}
