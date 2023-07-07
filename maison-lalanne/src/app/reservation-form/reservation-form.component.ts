import { Component, Input, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from '../reservation-form/reservation.service';
import { Reservation } from './reservation';
import { DatePipe } from '@angular/common';
import { Chambre } from '../chambres/chambre';
import { ChambreService } from '../chambres/chambre.service';
import { User } from '../login/login-user';
import { StorageService } from '../login/storage.service';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent implements OnInit {
  chambres: Chambre[];
 // reservation: Reservation;
  datecreate =  new Date("2023-01-12");
  dateIn = new Date();
  dateOut = new Date();
  
  selectedBedroom: number;
  date = new Date();
  //name: Chambre;
  user: User;
 
  //DatePipe
  nameA = 'Angular ' + VERSION.major;
  pipe = new DatePipe('en-EN');
  newDateIn: string;
  newDateOut: string;
  

  // form: any = {
  //   dateIn: new Date(),
  //   dateOut:  new Date(),
  //  // selectedBedroom: "",
  // };
  message: string = "ca n'a pas fonctionné";
  errorMessage = '';
  // reservation: Reservation;

  
  constructor(public authService: AuthService,private _reservationService: ReservationService,private _chambreService: ChambreService,private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    this._chambreService.getBedrooms().subscribe(data => {
      this.chambres = data;
    }
    // ,
    // (error) => {
    //   console.error('Erreur lors de la récupération des chambres disponibles :', error);
    // }
    );
  }
  
    //recuperer les dates des inputs
    // dateInEvent(event: any) {
    //   console.log(event.target.value);
    //   return event.target.value
    // } 
    // dateOutEvent(event: any) {
    //   console.log(event.target.value);
    //   return event.target.value
    // }
    onClick() {
      // storage session
      const jsonStringUser = sessionStorage.getItem('userId'); // This is the json string we stored
      const userSession = JSON.parse(jsonStringUser); // this is your user

     // this.changeFormat(this.dateIn, this.dateOut); 
      console.log("date entrée :",this.dateIn);
      console.log("date sortie :",this.dateOut);
      console.log("datecreate :", this.datecreate);
      console.log("ID de la chambre :",this.selectedBedroom);
      console.log("ID du user :", userSession); 

      

    }

    //DatePipe pour changer le format 
    // changeFormat(dateIn: any, dateOut: any){
    //   let ChangedFormatIn = this.pipe.transform(dateIn, 'dd/MM/YYYY');
    //   this.newDateIn = ChangedFormatIn;

    //   let ChangedFormatOut = this.pipe.transform(dateOut, 'dd/MM/YYYY');
    //   this.newDateOut = ChangedFormatOut;
    // }

    onSubmit(): void {
      // Récupérer les informations de session depuis le navigateur
      const sessionData = JSON.parse(sessionStorage.getItem('userId'));
      if (!sessionData) {
        console.error('Session introuvable');
        console.error(sessionData);
        return;
      }
      
      // Envoyer les informations de réservation à l'API REST
      let reservation = {
        idbedroom: this.selectedBedroom,
        dateIn: this.dateIn,
        dateOut: this.dateOut,
        iduser: sessionData.userId,
      }
      
      // this.authService.registerReserv(reservation).subscribe({
      //   next: data => {
      //     console.log('Observation data: ' , data)
      //     reservation = data;
      //     console.log('subscribe lancé + data: ' , data)
      //   },
      //   error: err => {
      //     console.log("error message register")
      //     this.errorMessage = err.error.message;
      //   }
      // });

      // this.authService.registerReserv(reservation).subscribe(
      //   (data) => {
      //     console.log('Réservation effectuée avec succès !');
      //     console.log(data);
      //   },
      //   (error) => {
      //     console.error('Erreur lors de la réservation :', error);
      //   }
      // );
    
    }


  // onSubmit() {
  //   this._reservationService.postUserReservation(this.reservation).subscribe(() => {
  //     this.router.navigate(['/reservation', this.reservation.id]);
  //   });
  // }
}

