// modules
import { NgModule }               from '@angular/core';
import { RouterModule }           from '@angular/router';

// feature routing module
import { ProductRoutingModule }   from './product-routing.module';

// shared modules
import { SharedModule }           from './../shared/shared.module';

// components
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent }   from './components/product-list/product-list.component';

@NgModule({
  // modules
  imports: [
    // angular module
    RouterModule,
    // feature routing module
    ProductRoutingModule,
    // shared modules
    SharedModule
  ],
  // components
  declarations: [
    ProductDetailComponent,
    ProductListComponent
  ],
  // exports
  exports: [
    // components
    ProductDetailComponent,
    ProductListComponent
  ]
})
export class ProductModule {}
