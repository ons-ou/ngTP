import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { BehaviorSubject, Observable, Subject, concatMap, distinctUntilChanged, map, scan, switchMap, takeWhile } from 'rxjs';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  productService = inject(ProductService);
  products$ = new Observable<Product[]>();
  numberElements$ = new BehaviorSubject<number>(0);
  nbElements = 12;
  buttonDisabled = false;

  constructor() {
    this.products$ = this.numberElements$.pipe(
      takeWhile((x)=> x<100),
      concatMap((skip) => {
        return this.productService.getAll(12, skip)
      }),
      scan((acc, res)=> {
        return [...acc, ...res]
      })
    );
  }
  
  showMore(): void {
    this.numberElements$.next(this.nbElements);
    this.nbElements = this.nbElements + 12;
    if (this.nbElements >= 100){
      this.buttonDisabled = true
    }
  }
 
}
