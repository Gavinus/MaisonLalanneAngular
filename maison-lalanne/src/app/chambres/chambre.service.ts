import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Chambre } from "./chambre";

@Injectable()
export class ChambreService {

    private chambreUrl = 'api/chambres';

    constructor(private http: HttpClient) {}

    getChambres() : Observable<Chambre[]> {
       return this.http.get<Chambre[]>(this.chambreUrl);
    }

    getChambreById(id: number) : Observable<Chambre> {
        
        const url = `${this.chambreUrl}/${id}`;
        return this.http.get<Chambre>(url);
    }   


    updateChambre(chambre: Chambre) : Observable<Chambre> {

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
          };
        return this.http.put<Chambre>(this.chambreUrl, chambre, httpOptions);
    }

    deleteChambre(id: number): Observable<any> {

        const url = `${this.chambreUrl}/${id}`;
        return this.http.delete(url)
    }
}