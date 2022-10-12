import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss'],
})
export class CreateProfileComponent implements OnInit {

  constructor(private modalCtrl: ModalController, private alertController: AlertController) { }

  ngOnInit() {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  async onSubmit(f: NgForm) {
    const alert = await this.alertController.create({
      message: 'Create profile successfull! You should receive an email shortly with further instructions on how to use the app.',
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
