import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocChatPage } from './doc-chat.page';

const routes: Routes = [
  {
    path: '',
    component: DocChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocChatPageRoutingModule {}
