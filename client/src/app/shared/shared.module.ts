import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
