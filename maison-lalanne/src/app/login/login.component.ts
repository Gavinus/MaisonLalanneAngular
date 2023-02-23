import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from './login-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  message: string = 'Vous êtes déconnecté. (admin/admin)';
  email: User[];
  password: User[];

  constructor(public authService: AuthService, private router: Router) { }

  // Informe l'utilisateur sur son authentfication.
  setMessage() {
    this.message = this.authService.isLoggedIn ?
      'Vous êtes connecté.' : 'Identifiant ou mot de passe incorrect.';
  }

  // Connecte l'utilisateur auprès du Guard
  login() {
    this.message = 'Tentative de connexion en cours ...';
    this.authService.login(this.email, this.password).subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Récupère l'URL de redirection depuis le service d'authentification
        // Si aucune redirection n'a été définis, redirige l'utilisateur vers la page reservation.
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/reservation';
        // Redirige l'utilisateur
        this.router.navigate([redirect]);
      } else {
        this.password = null;
      }
    });
  }

  // Déconnecte l'utilisateur
  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
