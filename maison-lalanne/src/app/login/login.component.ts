import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from './login-user';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  //test login 1
  message: string = 'Vous êtes déconnecté. (admin/admin)';
  // email: string;
  // password: string;

  //test login 2
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  user: User;
  
  constructor(public authService: AuthService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  
  }

  //Envoi le post contenant l'email et le password
  onSubmit(): void {
    const { email, password } = this.form;
    // login() du auth.service
    this.authService.login(email, password).subscribe({
      next: data => {
        this.user = data;
        console.log("On recoit:",this.user)
        sessionStorage.setItem('userId', JSON.stringify(this.user.id))
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/reservation';
        this.router.navigate([redirect]);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        console.log("login sur true dans le submit");
        console.log(this.isLoggedIn);
      },
      error: err => {
        this.reloadPage();
        this.setMessage();
        console.log('error login not match')
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }  
    });
  }
  reloadPage(): void {
    window.location.reload();
  }


  


  //Informe l'utilisateur sur son authentfication.
  setMessage() {
    this.message = this.authService.isLoggedIn ?
      'Vous êtes connecté.' : 'Identifiant ou mot de passe incorrect.';
  }

 // Déconnecte l'utilisateur
  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
