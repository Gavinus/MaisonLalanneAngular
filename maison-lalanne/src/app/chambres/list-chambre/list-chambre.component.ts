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

  
  reservations: Reservation[];
  @Input() reservation: Reservation;
  dateIn: Reservation[];
  dateOut: Reservation[];

  //DatePipe
  name = 'Angular ' + VERSION.major;
  pipe = new DatePipe('en-EN');
  newDateIn: string;
  newDateOut: string;

  constructor(private router: Router,private _reservationService: ReservationService, private _chambreService: ChambreService, private http: HttpClient) {}

  ngOnInit(): any{
    this._chambreService.getBedrooms().subscribe(data => {
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

    //DatePipe pour changer le format 
    changeFormat(dateIn: any, dateOut: any){
      let ChangedFormatIn = this.pipe.transform(dateIn, 'dd/MM/YYYY');
      this.newDateIn = ChangedFormatIn;

      let ChangedFormatOut = this.pipe.transform(dateOut, 'dd/MM/YYYY');
      this.newDateOut = ChangedFormatOut;
    }



    // selectChambre(data: []) {
    //   this.router.navigate(['/bedroom/allbedroom', data]);
    // }

  }