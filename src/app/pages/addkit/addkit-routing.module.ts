import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddkitPage } from './addkit.page';

const routes: Routes = [
  {
    path: '',
    component: AddkitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddkitPageRoutingModule {}
