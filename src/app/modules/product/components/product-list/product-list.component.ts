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
  constructor(private productService: ProductService) {
    // set default values
    this.filteredProducts = this.products;
    this.listFilter = 'cart';
  }

  imageMargin: number = 2;
  imageWidth: number = 50;
  pageTitle: string = 'Product List';
  showImage: boolean = false;

  private _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;

    // if there is a value for listFilter then apply filter and display filtered products
    // if there is no value for listFilter then display all proudcts
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  // filtered products
  filteredProducts: Product[];

  // original products
  products: Product[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2019",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2019",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2019",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "assets/images/hammer.png"
    },
    {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2019",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "assets/images/saw.png"
    },
    {
      "productId": 10,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2018",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "assets/images/xbox-controller.png"
    }
  ];

  ngOnInit() {}

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
