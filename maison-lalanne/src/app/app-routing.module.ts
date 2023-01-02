import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ChambresComponent } from './chambres/chambres.component';

const appRoutes: Routes = [
  // {path: "", redirectTo: 'acceuil', pathMatch: 'full'},
  {path: '', component: AcceuilComponent},
  {path: 'chambres', component: ChambresComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
