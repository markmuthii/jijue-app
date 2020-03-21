import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocChatsPageRoutingModule } from './doc-chats-routing.module';

import { DocChatsPage } from './doc-chats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocChatsPageRoutingModule
  ],
  declarations: [DocChatsPage]
})
export class DocChatsPageModule {}
