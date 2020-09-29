// modules
import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// feature modules
import { HomeModule }       from './modules/home/home.module';
import { ProductModule }    from './modules/product/product.module';

// components
import { AppComponent }     from './app.component';

@NgModule({
  // modules
  imports: [
    // angular modules
    AppRoutingModule, BrowserModule,
    // feature modules
    HomeModule, ProductModule
  ],
  // components
  declarations: [ AppComponent ],
  // services
  providers: [],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}
