import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './modulos/landing-page/landing-page.component';
import { GenericCardComponent } from './utilities/generic-card/generic-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CardFormComponent } from './modulos/card/card-form/card-form.component';
import { CardListComponent } from './modulos/card/card-list/card-list.component';

@NgModule({
  declarations: [LandingPageComponent, GenericCardComponent, CardFormComponent, CardListComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatCardModule, MatButtonModule],
  providers: [],
  bootstrap: [LandingPageComponent],
})
export class AppModule {}
