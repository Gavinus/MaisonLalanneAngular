import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ChambresComponent } from './chambres/chambres.component';
import { DecouverteComponent } from './decouverte/decouverte.component';
import { ReservationComponent } from './reservation/reservation.component';
import { TourismeComponent } from './tourisme/tourisme.component';

const appRoutes: Routes = [
  // {path: "", redirectTo: 'acceuil', pathMatch: 'full'},
  {path: '', component: AcceuilComponent},
  {path: 'acceuil', component: AcceuilComponent},
  {path: 'chambres', component: ChambresComponent},
  {path: 'decouverte', component: DecouverteComponent},
  {path: 'reservation', component: ReservationComponent},
  {path: 'service', component: ReservationComponent},
  {path: 'tourisme', component: TourismeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
