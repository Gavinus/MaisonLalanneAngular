import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { ChambresComponent } from "./chambres.component";
import { ListChambreComponent } from "./list-chambre/list-chambre.component";

//Creation des routes
const appRoutes: Routes = [
    {
        //path principale /chambres pour ensuite route enfant (children)
        path:'chambre',
        children: [
            { path: 'all', component: ListChambreComponent},
            { path: ':id', component: ChambresComponent },
        ],
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes),
        FormsModule
    ],
    exports: [
        RouterModule
    ]
})

export class ChambreRoutingModule {

}