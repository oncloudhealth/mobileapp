import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-agency-selection',
  templateUrl: './agency-selection.page.html',
  styleUrls: ['./agency-selection.page.scss'],
})
export class AgencySelectionPage implements OnInit {
  selectedAgency: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  apply() {
    this.router.navigateByUrl('/tabs', { replaceUrl: true });
  }

}
