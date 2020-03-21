import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocChatPageRoutingModule } from './doc-chat-routing.module';

import { DocChatPage } from './doc-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocChatPageRoutingModule
  ],
  declarations: [DocChatPage]
})
export class DocChatPageModule {}
