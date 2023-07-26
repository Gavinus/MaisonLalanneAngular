import { HttpClient } from '@angular/common/http';
// VERSION rapport au datePipe
import { Component, Input, OnInit, VERSION} from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/reservation-form/reservation';
import { ReservationService } from 'src/app/reservation-form/reservation.service';
import { Chambre } from '../chambre';
import { ChambreService } from '../chambre.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-list-chambre',
  templateUrl: './list-chambre.component.html',
  styleUrls: ['./list-chambre.component.scss']
})


export class ListChambreComponent implements OnInit{
  chambres: Chambre[];  
  //DatePipe
  // name = 'Angular ' + VERSION.major;
  // pipe = new DatePipe('en-EN');
  // newDateIn: string;
  // newDateOut: string;

  constructor(private router: Router, private _chambreService: ChambreService, private http: HttpClient) {}

  ngOnInit(): any{
    this._chambreService.getBedrooms().subscribe(data => {
      console.log(data);
      this.chambres = data;
    });
  };
  
    selectChambre(chambre: Chambre) {
      this.router.navigate(['/chambre', chambre.id]);
    }
  }