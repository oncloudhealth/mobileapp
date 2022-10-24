import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgencySelectionPage } from './agency-selection.page';

const routes: Routes = [
  {
    path: '',
    component: AgencySelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgencySelectionPageRoutingModule {}
