import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { CreateProfileComponent } from '../components/create-profile/create-profile.component';
import { ForgotPasswordComponent } from '../components/forgot-password/forgot-password.component';
import { SignupComponent } from '../components/signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  onLogin(f: NgForm) {
    console.log(f.value);
    // calll this for first time logged in
    // this.openModalCreateProfile();
  }

  async openModalSignup() {
    const modal = await this.modalCtrl.create({
      component: SignupComponent, canDismiss: true,
      presentingElement: document.getElementById('ion-router-outlet-content')
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      console.log(data);
      // redirect to home if signup success
    }
  }

  async openModalCreateProfile() {
    const modal = await this.modalCtrl.create({
      component: CreateProfileComponent, canDismiss: true,
      presentingElement: document.getElementById('ion-router-outlet-content')
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      console.log(data);
      // redirect to home
    }
  }

  async openModalForgotPassword() {
    const modal = await this.modalCtrl.create({
      component: ForgotPasswordComponent, canDismiss: true,
      presentingElement: document.getElementById('ion-router-outlet-content')
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      console.log(data);
      // redirect to home
    }
  }

}
