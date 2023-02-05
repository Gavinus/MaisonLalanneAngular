import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/reservation-form/reservation';
import { ReservationService } from 'src/app/reservation-form/reservation.service';
import { Chambre } from '../chambre';
import { ChambreService } from '../chambre.service';


@Component({
  selector: 'app-list-chambre',
  templateUrl: './list-chambre.component.html',
  styleUrls: ['./list-chambre.component.scss']
})


export class ListChambreComponent implements OnInit{
  chambres: Chambre[];

  
  reservations: Reservation[];
  @Input() reservation: Reservation;
  dateIn: Reservation[];

  //dateIn = new Date(2023, 2, 5);

  constructor(private router: Router,private _reservationService: ReservationService, private _chambreService: ChambreService, private http: HttpClient) {}

  ngOnInit(): any{
    this._chambreService.getChambres().subscribe(data => {
      this.chambres = data;
    });

    // this._reservationService.getReservation().subscribe(data => {
    //   this.reservations = data;
    // });
    
      // this.http.get('http://localhost:8080/bedroom/allbedroom').subscribe((res)=>{this.data = res})

      // console.log(this.data)

  };
    selectChambre(chambre: Chambre) {
      this.router.navigate(['/chambre', chambre.id]);
    }

    // selectChambre(data: []) {
    //   this.router.navigate(['/bedroom/allbedroom', data]);
    // }

  }