import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChambresComponent } from './chambres.component';
import { ListChambreComponent } from './list-chambre/list-chambre.component';
import { ChambreRoutingModule } from './chambre-routing.module';
import { ChambreService } from './chambre.service';
// import { ChambreFormComponent } from './chambre-form/chambre-form.component';
import { FormsModule } from '@angular/forms';
// import { EditChambreComponent } from './edit-chambre/edit-chambre.component';
// import { AuthGuardService } from '../auth-guard.service';
// import { AuthService } from '../auth.service';

@NgModule({
  declarations: [
    ListChambreComponent,
    ChambresComponent,
    // ChambreFormComponent,
    // EditChambreComponent,
  ],
  imports: [
    //CommonModule à mettre dans les modules annexe et non app.module
    CommonModule,

    //specifier qu'on veut lancer aussi
    ChambreRoutingModule,

    //import pour le form
    FormsModule
  ],
  providers: [
    ChambreService,
    // AuthGuardService,
    // AuthService
  ]
})
export class ChambreModule { }