import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientChatsPage } from './patient-chats.page';

const routes: Routes = [
  {
    path: '',
    component: PatientChatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientChatsPageRoutingModule {}
