import { Component,  OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Reservationsimple } from './reservationsimple';
import { ChambreService } from '../chambres/chambre.service';
import { Chambre } from '../chambres/chambre';

@Component({
  selector: 'app-reservationsimple-form',
  templateUrl: './reservationsimple-form.component.html',
  styleUrls: ['./reservationsimple-form.component.scss']
})
export class ReservationsimpleFormComponent implements OnInit{

  reservationsimple: Reservationsimple;
  chambres: Chambre[];

  bedrooms = [
    { id: 1, name: "Coquelicot" },
    { id: 2, name: "Pissenlit" },
  ];

  form: any = {
    id: null,
    name:"",
    lastname:"",
    email:"",
    phonenumber:"",
    datein: "",
    dateout: "",
    address: "",
    city: "",
    addressnumber: "",
    postalcode: "",
    bedroom: ""
  };
  errorMessage = '';

  bedroom: string;

  onBedroomSelected() {
    console.log(this.bedroom);
  }
 
  constructor(public authService: AuthService,private _chambreService: ChambreService ) {}

  ngOnInit(): void {
    this._chambreService.getBedrooms().subscribe(data => {
      this.chambres = data;
    });
  }

  onSubmit(): void {

      const {
        name, lastname, email, phonenumber,
        datein, dateout, address, city, addressnumber,
        postalcode, bedroom
      } = this.form;
      this.authService.registerReservtest(name, lastname, email, phonenumber, datein, dateout, address, city, addressnumber , postalcode, bedroom).subscribe({
        next: data => {
          console.log('Observation data: ' , name, lastname, email, phonenumber, datein, dateout, address, city, addressnumber , postalcode, bedroom)
          this.reservationsimple = data;
          console.log('subscribe lancé + data: ' , data)
        },
        error: err => {
          console.log("error message register")
          this.errorMessage = err.error.message;
        }
      });
  }
}


