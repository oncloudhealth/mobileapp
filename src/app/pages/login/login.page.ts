import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private navController: NavController) { }

  ngOnInit() {
  }

  onLogin(f: NgForm) {
    console.log(f.value);
    // calll this for first time logged in
    // this.openModalCreateProfile();
    this.navController.navigateRoot('/create-profile');
  }

}
