import { UsersService } from './../../services/users.service';
import { AuthConstantsService } from './../../config/auth-constants.service';
import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

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
    private router: Router
  ) {}

  async ngOnInit() {
    console.log('Hey from docs chat');
    await this.storageService
      .get(this.authConstants.AUTH)
      .then((userData: any) => {
        this.userId = userData.id;
      });

    this.usersService.getDoctorsPatients(this.userId).subscribe((data: any) => {
      console.log(data);
      this.patients = data.data;
    });
  }

  navigateToChatPage(patientId: string) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        patientId
      }
    };

    this.router.navigate(['home/chat'], navigationExtras);
  }
}
