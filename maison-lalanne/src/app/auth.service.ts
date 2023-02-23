import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { tap, delay } from "rxjs/operators";
import { User } from "./login/login-user";

@Injectable({providedIn: 'root'})
export class AuthService {
    isLoggedIn: boolean = false; // L'utilisateur est-il connecté ? 
    redirectUrl: string; // où rediriger l'utilisateur après l'authentification
    email: User[];
    password: User[]

    private urluser = 'http://localhost:8080/user';

    constructor(private http: HttpClient) {}

    login(email: User[], password: User[]) : Observable<User[]> {
        let isLoggedIn = (this.email = email, this.password = password);
        console.log(this.urluser + "/loginuser");
        return this.http.get<User[]>(this.urluser + "/loginuser");
    }



    submitLogin(user: User) : Observable<User> {

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
          };
        return this.http.post<User>(this.urluser + "/userconnect", user, httpOptions);
    }

    logout() {
        this.isLoggedIn = false;
    }
}