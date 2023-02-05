import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from '../reservation-form/reservation.service';
import { Reservation } from './reservation';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent implements OnInit {
  @Input() reservation: Reservation;


  constructor(private _reservationService: ReservationService, private router: Router) { }

  ngOnInit(): void {
    
  }


  // Méthode appelée lorsque l'utilisateur ajoute ou retire un type au pokémon en cours d'édition.
  // selectType($event: any, type: string): void {
  //   let checked = $event.target.checked;
  //   if (checked) {
  //     this.pokemon.types.push(type);
  //   } else {
  //     let index = this.pokemon.types.indexOf(type);
  //     if (index > -1) {
  //       this.pokemon.types.splice(index, 1);
  //     }
  //   }
  // }


  
  onSubmit() {
    this._reservationService.postReservationUser(this.reservation).subscribe(() => {
      this.router.navigate(['/reservation', this.reservation]);
    });
  }
}