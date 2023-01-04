import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
// import { ChambresComponent } from './chambres/chambres.component';
import { ListChambreComponent } from './chambres/list-chambre/list-chambre.component';
import { DecouverteComponent } from './decouverte/decouverte.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReservationComponent } from './reservation/reservation.component';
import { TourismeComponent } from './tourisme/tourisme.component';

const appRoutes: Routes = [
  // {path: "", redirectTo: 'acceuil', pathMatch: 'full'},
  {path: '', redirectTo: 'acceuil', pathMatch: 'full'},
  {path: 'acceuil', component: AcceuilComponent},
  {path: 'chambre/all', component: ListChambreComponent},
  {path: 'decouverte', component: DecouverteComponent},
  {path: 'reservation', component: ReservationComponent},
  {path: 'service', component: ReservationComponent},
  {path: 'tourisme', component: TourismeComponent},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
