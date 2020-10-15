// components
import { Component, OnInit } from '@angular/core';

// services
import { ActivatedRoute }    from '@angular/router';

// interfaces
import { Product }           from './../../../../interfaces/product';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Proudct Detail';
  product: Product;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
  }
}
