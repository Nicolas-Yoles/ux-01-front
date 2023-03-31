import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './modulos/landing-page/landing-page.component';
import { GenericCardComponent } from './utilities/generic-card/generic-card.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    GenericCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [LandingPageComponent]
})
export class AppModule { }
