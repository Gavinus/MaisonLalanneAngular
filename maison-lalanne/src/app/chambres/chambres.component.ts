import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chambre } from './chambre';
import { ChambreService } from './chambre.service';

@Component({
  selector: 'app-chambres',
  templateUrl: './chambres.component.html',
  styleUrls: ['./chambres.component.scss']
})
export class ChambresComponent implements OnInit{
  chambre: Chambre = null;
  urls: string[];
  mainImageUrl: string; // Nouvelle propriété pour l'URL de l'image principale de la chambre
  selectedImageUrl: string; // Nouvelle propriété pour l'URL de l'image sélectionnée


  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private _chambreService: ChambreService
  ) {}

  goReservation() {
    this.router.navigate(['/reservation']);
  }


  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id");

    this._chambreService.getBedroomsById(id).subscribe(data => {
        this.chambre = data;
        this.mainImageUrl = this.chambre.picture; // Stockez l'URL de l'image principale de la chambre

    });

    this._chambreService.getBedroomUrls(id).subscribe(data => {
      this.urls = data;
      this.selectedImageUrl = this.urls[0]; // Sélectionnez la première image par défaut

    });
  }

  // Méthode pour changer l'image principale lors du clic sur une image en dessous
  changeMainImage(url: string) {
    this.selectedImageUrl = url;
    this.mainImageUrl = url; // Remplacez également l'URL de l'image principale de la chambre
  }

  
}
