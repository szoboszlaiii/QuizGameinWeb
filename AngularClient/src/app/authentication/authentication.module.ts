import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    RegisterUserComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild([
      { path: 'register', component: RegisterUserComponent },
      { path: 'login', component: LoginComponent }
    ])
  ]
})
export class AuthenticationModule { }
