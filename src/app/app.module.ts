// modules
import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent }     from './app.component';

@NgModule({
  // modules
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  // components
  declarations: [
    AppComponent
  ],
  // services
  providers: [],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}
