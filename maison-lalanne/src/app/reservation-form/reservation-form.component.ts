import { Component, Input, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from '../reservation-form/reservation.service';
import { Reservation } from './reservation';
import { DatePipe } from '@angular/common';
import { Chambre } from '../chambres/chambre';
import { ChambreService } from '../chambres/chambre.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent implements OnInit {
  chambres: Chambre[];
  reservations: Reservation[];
  @Input() reservation: Reservation;
  dateIn: Reservation[];
  dateOut: Reservation[];
  name: Chambre[];

  //DatePipe
  nameA = 'Angular ' + VERSION.major;
  pipe = new DatePipe('en-EN');
  newDateIn: string;
  newDateOut: string;


  constructor(private _reservationService: ReservationService,private _chambreService: ChambreService, private router: Router) { }

  ngOnInit(): void {
    
  }
    //recuperer les dates des inputs
    DateInEvent(event: any) {
      console.log(event.target.value);
    }
    DateOutEvent(event: any) {
      console.log(event.target.value);
    }
    onClick() {
      this.changeFormat(this.dateIn, this.dateOut); 
      console.log(this.newDateIn);
      console.log(this.newDateOut);
    }
    selectedChambre(value: any) {

    }

    //DatePipe pour changer le format 
    changeFormat(dateIn: any, dateOut: any){
      let ChangedFormatIn = this.pipe.transform(dateIn, 'dd/MM/YYYY');
      this.newDateIn = ChangedFormatIn;

      let ChangedFormatOut = this.pipe.transform(dateOut, 'dd/MM/YYYY');
      this.newDateOut = ChangedFormatOut;
    }

  onSubmit() {
    this._reservationService.postUserReservation(this.reservation).subscribe(() => {
      this.router.navigate(['/reservation', this.reservation.id]);
    });
  }

  // onSubmit() {
  //   this._reservationService.postReservationUser(this.reservation).subscribe(() => {
  //     this.router.navigate(['/reservation', this.reservation]);
  //   });
  // }
}