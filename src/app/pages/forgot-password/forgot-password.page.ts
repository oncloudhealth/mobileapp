import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async onSubmit(f: NgForm) {
    const alert = await this.alertController.create({
      message: 'You should receive an email shortly with further instructions on how to reset your password.',
      backdropDismiss: false,
      buttons: [{
        text: 'OK',
        role: 'confirm'
      }],
    });

    await alert.present();
  }

}
