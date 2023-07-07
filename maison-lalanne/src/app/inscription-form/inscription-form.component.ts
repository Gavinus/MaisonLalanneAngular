import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../login/login-user';

@Component({
  selector: 'app-inscription-form',
  templateUrl: './inscription-form.component.html',
  styleUrls: ['./inscription-form.component.scss']
})
export class InscriptionFormComponent implements OnInit{
  
  form : any = {
    name: "",
    firstname: "",
    email: "",
    phonenumber: "",
    password: "",
    confirmPassword: ""
  };
  message: string = "ca n'a pas fonctionné";
  errorMessage = 'probleme dans lenvoi';
  user: User;
  
  constructor(public authService: AuthService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
   
  }

  onSubmit(): void {
    const { name, firstname, email, password, phonenumber} = this.form;
    console.log(JSON.stringify(this.form, null, 2));
    
    this.authService.register(name, firstname, email, password, phonenumber).subscribe({
      next: data => {
        this.user = data;
        console.log('subscribe lancé' ,this.user)
      },
      error: err => {
        console.log("error message register")
        this.errorMessage = err.error.message;
      }
    });
  }

  onReset(form: NgForm): void {
    form.reset();
  }
}
