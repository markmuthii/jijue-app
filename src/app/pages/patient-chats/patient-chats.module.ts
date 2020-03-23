import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientChatsPageRoutingModule } from './patient-chats-routing.module';

import { PatientChatsPage } from './patient-chats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientChatsPageRoutingModule
  ],
  declarations: [PatientChatsPage]
})
export class PatientChatsPageModule {}
