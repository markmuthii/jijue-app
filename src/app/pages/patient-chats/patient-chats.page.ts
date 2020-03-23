import { MenuPopoverComponent } from './../../components/menu-popover/menu-popover.component';
import { UsersService } from './../../services/users.service';
import { KitsService } from './../../services/kits.service';
import { AuthConstantsService } from './../../config/auth-constants.service';
import { StorageService } from './../../services/storage.service';
import { Router } from '@angular/router';
import { ChatPage } from './../chat/chat.page';
import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-patient-chats',
  templateUrl: './patient-chats.page.html',
  styleUrls: ['./patient-chats.page.scss']
})
export class PatientChatsPage implements OnInit {
  userId: string;
  canChat: boolean;
  doctors = [];
  doctor: any;

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
      this.doctors = data.data;

      this.doctor = this.doctors[0];

      if (this.doctors.length < 1) {
        this.getRandomDoctor();
      }
    });
  }

  async openChatModal(doctorId: string) {
    const chatModal = await this.modalController.create({
      component: ChatPage,
      componentProps: {
        doctorId,
        userRole: 'patient',
        userId: this.userId
      }
    });

    return await chatModal.present();
  }

  getRandomDoctor() {
    this.usersService.getAllDoctors().subscribe((data: any) => {
      console.log('Random Docs All: ', data);

      const allDoctors = data.data;

      const randDoc = allDoctors[Math.floor(Math.random() * allDoctors.length)];

      console.log('Rand Doc: ', randDoc);

      this.doctor = randDoc;
    });
  }

  navigateToHome() {
    this.router.navigate(['home']);
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
