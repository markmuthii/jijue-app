import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-negative',
  templateUrl: './negative.page.html',
  styleUrls: ['./negative.page.scss']
})
export class NegativePage implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async closeChatModal() {
    await this.modalController.dismiss();
  }
}
