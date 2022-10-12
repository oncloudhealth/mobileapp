import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private modalCtrl: ModalController, private alertController: AlertController) { }

  ngOnInit() {
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  async onSubmit(f: NgForm) {
    const alert = await this.alertController.create({
      message: 'You should receive an email shortly with further instructions on how to reset your password.',
      backdropDismiss: false,
      buttons: [{
        text: 'OK',
        role: 'confirm',
        handler: () => {
          return this.modalCtrl.dismiss(f.value, 'confirm');
        },
      }],
    });

    await alert.present();
  }

}
