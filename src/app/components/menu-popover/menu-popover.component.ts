import { PopoverController } from '@ionic/angular';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-popover',
  templateUrl: './menu-popover.component.html',
  styleUrls: ['./menu-popover.component.scss']
})
export class MenuPopoverComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private popoverController: PopoverController
  ) {}

  ngOnInit() {}

  async logout() {
    this.auth.logout();
    return await this.popoverController.dismiss();
  }

  async closePopover() {
    return await this.popoverController.dismiss();
  }
}
