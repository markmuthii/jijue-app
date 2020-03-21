import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: '',
        redirectTo: '/home/addkit',
        pathMatch: 'full'
      },
      {
        path: 'addkit',
        loadChildren: () =>
          import('../pages/addkit/addkit.module').then(m => m.AddkitPageModule)
      },
      {
        path: 'negative',
        loadChildren: () =>
          import('../pages/negative/negative.module').then(
            m => m.NegativePageModule
          )
      },
      {
        path: 'chat',
        loadChildren: () =>
          import('../pages/chat/chat.module').then(m => m.ChatPageModule)
      },
      {
        path: 'chat/:patientId',
        loadChildren: () =>
          import('../pages/chat/chat.module').then(m => m.ChatPageModule)
      },
      {
        path: 'doc/chats',
        loadChildren: () =>
          import('../pages/doc-chats/doc-chats.module').then(
            m => m.DocChatsPageModule
          )
      },
      {
        path: 'doc/chat',
        loadChildren: () =>
          import('../pages/doc-chat/doc-chat.module').then(
            m => m.DocChatPageModule
          )
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home/addkit',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
