import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { BehaviorSubject, Observable, scan, switchMap } from 'rxjs';
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

  constructor() {
    this.products$ = this.numberElements$.pipe(
      switchMap((skip) => this.productService.getAll(12, skip)),
      scan((acc, res)=> [...acc, ...res])
    );
  }
  
  showMore(): void {
    const nextPage = this.numberElements$.value + 12;
    if (nextPage <= 100) this.numberElements$.next(nextPage);
  }
}
