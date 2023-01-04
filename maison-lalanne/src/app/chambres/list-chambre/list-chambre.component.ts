import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Chambre } from '../chambre';
import { ChambreService } from '../chambre.service';

@Component({
  selector: 'app-list-chambre',
  templateUrl: './list-chambre.component.html',
  styleUrls: ['./list-chambre.component.scss']
})

export class ListChambreComponent implements OnInit{
  chambres: Chambre[];
  constructor(private router: Router, private _chambreService: ChambreService) {}

  ngOnInit() {
    this._chambreService.getChambres().subscribe(data => {
      this.chambres = data;
    });

    console.log(this.chambres);
  }


  selectChambre(chambre: Chambre) {
    this.router.navigate(['/chambre', chambre.id])
  }

}