import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocChatsPage } from './doc-chats.page';

const routes: Routes = [
  {
    path: 'doc',
    component: DocChatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocChatsPageRoutingModule {}
