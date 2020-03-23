import { MenuPopoverComponent } from './../../components/menu-popover/menu-popover.component';
import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addkit',
  templateUrl: './addkit.page.html',
  styleUrls: ['./addkit.page.scss']
})
export class AddkitPage implements OnInit {
  constructor(private popoverController: PopoverController) {}

  ngOnInit() {}

  async showMenuPopover(event: any) {
    const popover = await this.popoverController.create({
      component: MenuPopoverComponent,
      event,
      translucent: true
    });

    return await popover.present();
  }
}
