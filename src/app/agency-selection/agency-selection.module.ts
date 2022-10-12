import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgencySelectionPageRoutingModule } from './agency-selection-routing.module';

import { AgencySelectionPage } from './agency-selection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgencySelectionPageRoutingModule
  ],
  declarations: [AgencySelectionPage]
})
export class AgencySelectionPageModule {}
