import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChambresComponent } from "./chambres.component";
import { ListChambreComponent } from "./list-chambre/list-chambre.component";

//Creation des routes
const appRoutes: Routes = [
    {
        //path principale /chambres pour ensuite route enfant (children)
        path:'chambre',
        //autorisé l'accée grace à AuthGuardService
        // canActivate: [AuthGuardService],
        children: [
            { path: 'all', component: ListChambreComponent},
            // { path: 'edit/:id', component: EditChambreComponent, canActivate: [AuthGuardService] },
            { path: ':id', component: ChambresComponent },
        ],
    }
    //route pour la liste principal des pokemon
    // { path: 'pokemons', component: ListPokemonComponent, canActivate: [AuthGuardService] },
    
     //route edit avec l'id lié au form
    // { path: 'pokemon/edit/:id', component: EditPokemonComponent },

    // pour detail on le recupère avec l'id
    // { path: 'pokemon/:id', component: DetailPokemonComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ChambreRoutingModule {

}