import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { AddkitSlideComponent } from './addkit-slide/addkit-slide.component';

// Must add the FormsModule and IonicModue in the imports to make the slides work
@NgModule({
  declarations: [LogoComponent, AddkitSlideComponent],
  exports: [LogoComponent, AddkitSlideComponent],
  imports: [CommonModule, FormsModule, IonicModule]
})
export class ComponentsModule {}
