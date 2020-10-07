// modules
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule }     from '@angular/router';

// feature modules
import { HomeModule }       from './modules/home/home.module';
import { ProductModule }    from './modules/product/product.module';

// components
import { AppComponent }     from './app.component';

@NgModule({
  // modules
  imports: [
    // angular modules
    AppRoutingModule, BrowserModule, HttpClientModule, RouterModule,
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
