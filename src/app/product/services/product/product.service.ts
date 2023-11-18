import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  http = inject(HttpClient)
  constructor() { }

  private apiUrl = 'https://dummyjson.com/products';

  getAll(take: number, skip: number = 0): Observable<Product[]> {
    const url = `${this.apiUrl}?skip=${skip}&limit=${take}`;
    console.log(url)

    return this.http.get<{products: Product[]}>(url).pipe(
      map((res)=> res.products)
    );
  }
}
