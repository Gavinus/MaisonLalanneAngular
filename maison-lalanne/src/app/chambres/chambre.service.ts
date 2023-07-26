import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Chambre } from "./chambre";

@Injectable({providedIn: 'root'})
export class ChambreService {

    //private chambreUrl = 'api/chambres';
    private urlchambre = 'http://localhost:8080/bedroom';

    constructor(private http: HttpClient) {}

    //appel RESTAPI JAVA   
    getBedrooms() : Observable<Chambre[]> {
        console.log(this.urlchambre + "/allbedroom");
        return this.http.get<Chambre[]>(this.urlchambre + "/allbedroom");
     }

    getBedroomsById(id: number) : Observable<Chambre> {
        const url = `${this.urlchambre}/${id}`;
        return this.http.get<Chambre>(url);
    }

    getBedroomUrls(bedroomId: number): Observable<string[]> {
      const url = `${this.urlchambre}/${bedroomId}/allpictureById`;
      return this.http.get<string[]>(url);
    }
    
    //si on doit modif des chambres
    // updateChambre(chambre: Chambre) : Observable<Chambre> {
    //     const httpOptions = {
    //         headers: new HttpHeaders({
    //           'Content-Type':  'application/json'
    //         })
    //       };
    //     return this.http.put<Chambre>(this.chambreUrl, chambre, httpOptions);
    // }

    // deleteChambre(id: number): Observable<any> {
    //     const url = `${this.chambreUrl}/${id}`;
    //     return this.http.delete(url)
    // }
}