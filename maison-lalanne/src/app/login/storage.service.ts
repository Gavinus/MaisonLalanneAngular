import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { User } from './login-user';


// A voir pour la V2


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  user: User


  constructor( private http: HttpClient) {}

  clean(): void {
    window.sessionStorage.clear();
  }

  // public saveUser(user: any): void {
  //   window.sessionStorage.removeItem(this.userUrl + '/userconnect');
  //   window.sessionStorage.setItem(this.userUrl + '/userconnect', JSON.stringify(user));
  // }


  // public getUser(): any {
  //   const user = window.sessionStorage.getItem(this.userUrl + '/user');
  //   if (user) {
  //     return JSON.parse(user);
  //   }

  //   return user;
  // }

  // public isLoggedIn(): boolean {
  //   const user = window.sessionStorage.getItem(USER_KEY);
  //   if (user) {
  //     return true;
  //   }

  //   return false;
  // }

//   fetchContentData(): Observable<any> {
//     return this.http.get<any>(this.userUrl + '/login');
//   }

//   public getContentData(): Observable<string> {
//     if (sessionStorage.getItem("this.user")) {
//       console.log('Getting from Session Storage');
//       return of(sessionStorage.getItem("this.user"));
//     } else {
//       return this.fetchContentData().pipe(
//         map((res: any) => {
//           console.log('Fetching from API');
//           sessionStorage.setItem("this.user",res.data);
//           return sessionStorage.getItem("this.user");
//         })
//       );
//     }
//   }

}

