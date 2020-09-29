// modules
import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

// shared modules
import { SharedModule } from './../shared/shared.module';

@NgModule({
  // modules
  imports: [
    // angular modules
    CommonModule,
    // shared modules
    SharedModule
  ],
  // components
  declarations: []
})
export class HomeModule {}
