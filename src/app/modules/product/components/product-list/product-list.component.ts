// components
import { Component, OnInit } from '@angular/core';

// services
import { ProductService }    from './../../../../services/product.service';

// interfaces
import { Product }           from './../../../../interfaces/product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  imageWidth: number = 50;
  imageMargin: number = 2;
  pageTitle: string = 'Product List';
  showImage: boolean = false;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    // change value
    this._listFilter = value;

    // if there is a value for listFilter then apply filter and display filtered products
    // if there is no value for listFilter then display all products
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  // filtered products
  filteredProducts: Product[];

  // non-filtered products
  products: Product[] = [];

  errorMessage: string;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    // retrieve products
    this.productService.getProducts().subscribe(
      // on success
      (products) => {
        this.products = products;

        // initialize filtered list of products to full list of products
        this.filteredProducts = this.products;
      },
      // on error
      (err) => this.errorMessage = err
    );
  }

  onRatingClicked(message: string) {
    // set page title value to include message passed from StarComponent event
    this.pageTitle = 'Product List: ' + message;
  }

  performFilter(filterText: string): Product[] {
    // convert to lowercase
    filterText = filterText.toLocaleLowerCase();

    // goal: create create array of filtered products
    // 1) for each product in the products array check whether the filterText exists inside the productName
    // 2) if filterText exists inside productName then add product to products array
    // 3) return array of filtered products
    return this.products.filter((product: Product) => product.productName.toLocaleLowerCase().indexOf(filterText) !== -1);
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
