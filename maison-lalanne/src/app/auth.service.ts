import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable} from "rxjs";
import { Chambre } from "./chambres/chambre";
import { User } from "./login/login-user";
import { Reservation } from "./reservation-form/reservation";
import { Reservationsimple } from "./reservationsimple-form/reservationsimple";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({providedIn: 'root'})
export class AuthService {
    isLoggedIn: boolean = false; // L'utilisateur est-il connecté ? 
    redirectUrl: string; // où rediriger l'utilisateur après l'authentification
    email: string;
    password: string;
    user: User;
    reservation: Reservation;
    reservationsimple: Reservationsimple;
    selectbedroom: Chambre;
    
    
    private urluser = 'http://localhost:8080/user';
    private urlreserv = 'http://localhost:8080/reservationsimple';

    constructor(private http: HttpClient) {}


  login(email: string, password: string): Observable<User> {
    console.log("fait bien la requete");
    this.isLoggedIn = true;
    console.log(this.isLoggedIn);
    return this.http.post<User>(this.urluser + '/userconnect',{"email": email,"password": password},
        httpOptions,
      );
    }

  register(name: string, firstname: string, password: string, email: string, phonenumber: string): Observable<User> {
    console.log('envoi requete')
    return this.http.post<User>(this.urluser + '/adduptadeuser',
      {"name":name,"firstname":firstname,"password":password,"email":email,"phonenumber":phonenumber},httpOptions,
    );
  }

  registerReserv(reservationsimple: Reservationsimple): Observable<Reservationsimple>{
    console.log('envoi de la reservation')
    return this.http.post<Reservationsimple>(this.urlreserv + '/adduptadereservationsimple',
      {reservationsimple},httpOptions
    )
  }

  registerReservtest(
    name:string,
    lastname:string,
    email:string,
    phonenumber:string,
    datein: Date,
    dateout: Date,
    address: string,
    city: string,
    addressnumber: number,
    postalcode: number,
    bedroom: string
    ): Observable<Reservationsimple>{
    console.log('envoi de la reservation')
    return this.http.post<Reservationsimple>(this.urlreserv + '/adduptadereservationsimple',
      {'name':name, "lastname":lastname, "email":email,
       "phonenumber":phonenumber, "datein":datein, 
       "dateout":dateout, "address":address, "city":city,
       "addressnumber":addressnumber,"postalcode":postalcode, "bedroom":bedroom},httpOptions
    )
  }

  registerReserv2(datecreate: Date, dateIn: Date, dateOut: Date, idbedroom: number, iduser: number): Observable<Reservation>{
    console.log('envoi de la reservation')
    return this.http.post<Reservation>(this.urlreserv + '/addreservation',
      {"datecreate":datecreate,"dateIn":dateIn, "dateOut":dateOut, "idbedroom":idbedroom, "iduser":iduser},httpOptions
    )
  }


  logout() {
      this.isLoggedIn = false;
  }
}




