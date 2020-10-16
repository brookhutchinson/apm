// services
import { Injectable }        from '@angular/core';
import { HttpClient }        from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

// interfaces
import { Product }           from './../interfaces/product';

// rxjs
import { Observable }        from 'rxjs';
import { throwError }        from 'rxjs';
import { catchError }        from 'rxjs/operators';
import { map }               from 'rxjs/operators';
import { tap }               from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl: string = 'assets/api/products/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl)
      .pipe(
        // log to console
        tap((products) => console.table(products)),
        // catch error
        catchError(this.handleError)
      );
  }

  getProduct(id: number): Observable<Product> {
    return this.getProducts()
      .pipe(
        map((products: Product[]) => products.find(p => p.productId === id))
      );
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage: string = '';

    if (err.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Client-Side Error occurred: ${err.error.message}`;
    } else {
      // server-side error
      errorMessage = `Server-Side Error occurred: Http Response Code ${err.status}, error message: ${err.message}`;
    }

    // log to console
    console.error(errorMessage);

    // throw error
    return throwError(errorMessage);
  }
}
