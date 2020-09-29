// modules
import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';

// shared modules
import { SharedModule }         from './../shared/shared.module';

// components
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  // modules
  imports: [
    // angular module
    CommonModule,
    // shared module
    SharedModule
  ],
  // components
  declarations: [ ProductListComponent ]
})
export class ProductModule {}
