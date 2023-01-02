import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ChambresComponent } from './chambres/chambres.component';
import { ReservationComponent } from './reservation/reservation.component';
import { TourismeComponent } from './tourisme/tourisme.component';
import { DecouverteComponent } from './decouverte/decouverte.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ChambresComponent,
    ReservationComponent,
    TourismeComponent,
    DecouverteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
