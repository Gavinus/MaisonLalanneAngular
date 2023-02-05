import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { tap, delay } from "rxjs/operators";

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false; // L'utilisateur est-il connecté ? 
    redirectUrl: string; // où rediriger l'utilisateur après l'authentification

    login(name: string, password: string) : Observable<boolean> {
        let isLoggedIn = (name === 'admin' && password === 'admin');

        return of(true).pipe(
            delay(1000),
            tap(() => this.isLoggedIn = isLoggedIn),
        );
    }

    logout() {
        this.isLoggedIn = false;
    }
}