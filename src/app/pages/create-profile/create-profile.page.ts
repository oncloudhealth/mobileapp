import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.page.html',
  styleUrls: ['./create-profile.page.scss'],
})
export class CreateProfilePage implements OnInit {

  constructor(private alertController: AlertController, private navController: NavController) { }

  ngOnInit() {
  }

  async onSubmit(f: NgForm) {
    const alert = await this.alertController.create({
      message: `You have been registered successfully. Your Mobile ID Number is ${f.value.phone}
        and a copy has been emailed to you. This number should be provided to your agency in order to be linked with them.`,
      backdropDismiss: false,
      buttons: [{
        text: 'OK',
        role: 'confirm',
        handler: () => {
          console.log(f.value);
          this.navController.navigateRoot('/agency-selection');
        },
      }],
    });

    await alert.present();
  }

}
