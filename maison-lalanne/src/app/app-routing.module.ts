import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AuthGuardService } from './auth-guard.service';
import { ListChambreComponent } from './chambres/list-chambre/list-chambre.component';
import { DecouverteComponent } from './decouverte/decouverte.component';
import { InscriptionFormComponent } from './inscription-form/inscription-form.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { TourismeComponent } from './tourisme/tourisme.component';
import { ReservationsimpleFormComponent } from './reservationsimple-form/reservationsimple-form.component';

const appRoutes: Routes = [
  {path: "", redirectTo: 'acceuil', pathMatch: 'full'},
  {path: 'acceuil', component: AcceuilComponent},
  {path: 'chambre/all', component: ListChambreComponent},
  {path: 'decouverte', component: DecouverteComponent},
  // Pour la V2
  // {path: 'reservation', component: ReservationFormComponent, canActivate: [AuthGuardService]},
  {path: 'reservation', component: ReservationsimpleFormComponent},
  {path: 'login', component: LoginComponent},
  {path: 'inscription', component: InscriptionFormComponent},
  {path: 'tourisme', component: TourismeComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
  RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }