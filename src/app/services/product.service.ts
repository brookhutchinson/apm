// services
import { Injectable } from '@angular/core';

// interfaces
import { Product }    from './../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {}

  getProducts(): Product[] {
    return;
  }
}
