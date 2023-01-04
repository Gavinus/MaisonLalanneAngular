import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ReservationComponent } from './reservation/reservation.component';
import { TourismeComponent } from './tourisme/tourisme.component';
import { DecouverteComponent } from './decouverte/decouverte.component';
import { ServiceComponent } from './service/service.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './chambres/in-memory-data-chambre.service';
import { ChambreModule } from './chambres/chambre.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ReservationComponent,
    TourismeComponent,
    DecouverteComponent,
    ServiceComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChambreModule,
    //import de l'api virtuel in-memory-data.service
    HttpClientModule,
    //simulation de l'api
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
