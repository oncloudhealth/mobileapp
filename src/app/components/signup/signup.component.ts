import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  constructor(private modalCtrl: ModalController, private alertController: AlertController) { }

  ngOnInit() {
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  async onSubmit(f: NgForm) {
    const alert = await this.alertController.create({
      message: 'Sign Up successfull! You should receive an email shortly with further instructions on how to link with your agency.',
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
