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

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private _chambreService: ChambreService
  ) {}

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id");

    this._chambreService.getBedroomsById(id).subscribe(data => {
        this.chambre = data;
      });
  }

}
