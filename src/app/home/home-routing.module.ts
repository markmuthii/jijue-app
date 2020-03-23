import { HomeGuard } from './../guards/home.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    canActivate: [HomeGuard],
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
        path: 'chats',
        loadChildren: () =>
          import('../pages/patient-chats/patient-chats.module').then(
            m => m.PatientChatsPageModule
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
