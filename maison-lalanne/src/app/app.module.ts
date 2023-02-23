import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { TourismeComponent } from './tourisme/tourisme.component';
import { DecouverteComponent } from './decouverte/decouverte.component';
import { ServiceComponent } from './service/service.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './chambres/in-memory-data-chambre.service';
import { ChambreModule } from './chambres/chambre.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { ReservationService } from './reservation-form/reservation.service';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { InscriptionFormComponent } from './inscription-form/inscription-form.component';
import { LoginRoutingModule } from './login/login-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    TourismeComponent,
    DecouverteComponent,
    ServiceComponent,
    PageNotFoundComponent,
    ReservationFormComponent,
    LoginComponent,
    InscriptionFormComponent,
  ],
  imports: [
    BrowserModule,
    // !!!!!!! WARNING ORDER OF MODULE !!!!!!! 1.5j de perdu! -_-
    ChambreModule,
    LoginRoutingModule,
    AppRoutingModule,
    //import de l'api virtuel in-memory-data.service
    HttpClientModule,
    //simulation de l'api
    //HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false}),
    FormsModule,
  ],
  providers: [
    ReservationService,
    AuthGuardService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
