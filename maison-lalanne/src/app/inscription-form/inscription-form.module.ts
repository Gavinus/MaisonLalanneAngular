import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatchPasswordDirective } from '../login/directives/match-password.directive';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InscriptionFormComponent } from './inscription-form.component';

@NgModule({
  imports: [
    BrowserModule,

  ],
  declarations: [
    //CommonModule à mettre dans les modules annexe et non app.module
    CommonModule,
    InscriptionFormComponent,
    MatchPasswordDirective,
    HttpClientModule,
    //import pour le form
    FormsModule
],
})
export class AppModule {}