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
      message: `You have been registered successfully. Your Mobile ID Number is ${f.value.phone} and a copy has been emailed to you. This number should be provided to your agency in order to be linked with them.`,
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
