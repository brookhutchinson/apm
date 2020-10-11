// modules
import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';

// shared modules
import { SharedModule }           from './../shared/shared.module';

// components
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent }   from './components/product-list/product-list.component';

@NgModule({
  // modules
  imports: [
    // angular module
    CommonModule,
    // shared module
    SharedModule
  ],
  // components
  declarations: [
    ProductDetailComponent,
    ProductListComponent
  ],
  // exports
  exports: [
    // angular module
    CommonModule,
    // shared module
    SharedModule,
    // components
    ProductDetailComponent,
    ProductListComponent
  ]
})
export class ProductModule {}
