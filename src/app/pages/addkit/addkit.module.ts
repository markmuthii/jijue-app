import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddkitPageRoutingModule } from './addkit-routing.module';

import { AddkitPage } from './addkit.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddkitPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AddkitPage]
})
export class AddkitPageModule {}
