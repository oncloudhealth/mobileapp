import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { CreateProfileComponent } from '../components/create-profile/create-profile.component';
import { ForgotPasswordComponent } from '../components/forgot-password/forgot-password.component';
import { SignupComponent } from '../components/signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage, CreateProfileComponent, ForgotPasswordComponent, SignupComponent]
})
export class LoginPageModule {}
