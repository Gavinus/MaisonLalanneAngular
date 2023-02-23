import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChambresComponent } from './chambres.component';
import { ListChambreComponent } from './list-chambre/list-chambre.component';
import { ChambreRoutingModule } from './chambre-routing.module';
import { ChambreService } from './chambre.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { EditChambreComponent } from './edit-chambre/edit-chambre.component';


@NgModule({
  declarations: [
    ListChambreComponent,
    ChambresComponent,
    // EditChambreComponent,
  ],
  imports: [
    //CommonModule à mettre dans les modules annexe et non app.module
    CommonModule,
    //specifier qu'on veut lancer aussi
    ChambreRoutingModule,
    HttpClientModule,
    //import pour le form
    FormsModule
  ],
  providers: [
    ChambreService,
  ]
})
export class ChambreModule { }