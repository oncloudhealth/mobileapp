import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private alertController: AlertController, public navController: NavController) { }

  ngOnInit() {
  }

  async onSubmit(f: NgForm) {
    const alert = await this.alertController.create({
      message: 'Sign Up successfull! You should receive an email shortly with further instructions on how to link with your agency.',
      backdropDismiss: false,
      buttons: [{
        text: 'OK',
        role: 'confirm'
      }],
    });

    await alert.present();
  }

}
