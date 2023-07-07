import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Reservation } from "./reservation";

@Injectable()
export class ReservationService {

    private reservationUrl = 'api/reservation';
    private urlAddReservation = 'http://localhost:8080/reservation';

    constructor(private http: HttpClient) {}

    getReservation() : Observable<Reservation[]> {
       return this.http.get<Reservation[]>(this.reservationUrl);
    }

    getReservationById(id: number) : Observable<Reservation> {
        
        const url = `${this.reservationUrl}/${id}`;
        return this.http.get<Reservation>(url);
    }   


    postUserReservation(reservation: Reservation) : Observable<boolean> {
      console.log(this.urlAddReservation + '/addreservation');
      return this.http.post<boolean>(this.urlAddReservation + '/addreservation/', reservation);
    }
    
    
    postReservationUser(reservation: Reservation) : Observable<Reservation> {

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
          };
        return this.http.post<Reservation>(this.reservationUrl, reservation, httpOptions);
    }

    
}