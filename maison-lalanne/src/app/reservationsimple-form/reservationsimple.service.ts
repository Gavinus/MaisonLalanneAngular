import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Reservationsimple } from "./reservationsimple";



@Injectable()
export class ReservationService {

    private reservationsimpleUrl = 'api/reservationsimple';
    private urlAddReservation = 'http://localhost:8080/reservationsimple';

    constructor(private http: HttpClient) {}

    getReservation() : Observable<Reservationsimple[]> {
       return this.http.get<Reservationsimple[]>(this.urlAddReservation + '/allreservationsimple');
    }

    getReservationById(id: number) : Observable<Reservationsimple> {
        
        const url = `${this.reservationsimpleUrl}/${id}`;
        return this.http.get<Reservationsimple>(url);
    }   
    
    


    postReservationUser(reservationsimple: Reservationsimple) : Observable<Reservationsimple> {

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
          };
        return this.http.post<Reservationsimple>(this.reservationsimpleUrl, reservationsimple, httpOptions);
    }

    
}