import { MenuPopoverComponent } from './../../components/menu-popover/menu-popover.component';
import { UsersService } from './../../services/users.service';
import { AuthConstantsService } from './../../config/auth-constants.service';
import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { ChatPage } from '../chat/chat.page';

@Component({
  selector: 'app-doc-chats',
  templateUrl: './doc-chats.page.html',
  styleUrls: ['./doc-chats.page.scss']
})
export class DocChatsPage implements OnInit {
  userId: string;
  patients: any = [];
  constructor(
    private usersService: UsersService,
    private authConstants: AuthConstantsService,
    private storageService: StorageService,
    private router: Router,
    private modalController: ModalController,
    private popoverController: PopoverController
  ) {}

  async ngOnInit() {
    console.log('Hey from docs chat');
    await this.storageService
      .get(this.authConstants.AUTH)
      .then((userData: any) => {
        this.userId = userData.id;
      });

    this.usersService.getRelatedUsers(this.userId).subscribe((data: any) => {
      console.log(data);
      this.patients = data.data;
    });
  }

  async openChatModal(patientId: string) {
    const chatModal = await this.modalController.create({
      component: ChatPage,
      componentProps: {
        patientId,
        userRole: 'doctor',
        userId: this.userId
      }
    });

    return await chatModal.present();
  }

  async showMenuPopover(event: any) {
    const popover = await this.popoverController.create({
      component: MenuPopoverComponent,
      event,
      translucent: true
    });

    return await popover.present();
  }
}
