// modules
import { NgModule }               from '@angular/core';
import { PreloadAllModules }      from '@angular/router';
import { RouterModule }           from '@angular/router';
import { Routes }                 from '@angular/router';

// components
import { ProductDetailComponent } from './modules/product/components/product-detail/product-detail.component';
import { ProductListComponent }   from './modules/product/components/product-list/product-list.component';
import { WelcomeComponent }       from './modules/home/components/welcome/welcome.component';

// define routes
const routes: Routes = [
  // product list route
  { path: 'products', component: ProductListComponent },
  // product detail route
  { path: 'products/:id', component: ProductDetailComponent },
  // welcome route
  { path: 'welcome', component: WelcomeComponent },
  // default route
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  // wildcard route
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  // imports
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ],
  // exports
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
