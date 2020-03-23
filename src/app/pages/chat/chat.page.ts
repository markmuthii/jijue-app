import { MessagesService } from './../../services/messages.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ModalController, NavParams, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss']
})
export class ChatPage implements OnInit {
  userId: string;
  messageText = '';
  messages = [];
  currentUser: string;
  userRole: string;
  doctor: string;
  patient: any;
  messageTo: string;
  messageFrom: string;

  @ViewChild(IonContent, { read: false, static: true }) content: IonContent;

  constructor(
    private socket: Socket,
    private messageService: MessagesService,
    private modalController: ModalController,
    private navParams: NavParams
  ) {}

  async ngOnInit() {
    this.userRole = this.navParams.data.userRole;
    this.currentUser = this.userId = this.navParams.data.userId;

    // Get Messages
    this.getMessages();

    setTimeout(() => {
      this.content.scrollToBottom(200);
    });

    this.socket.connect();

    this.socket.emit('set-user-id', this.userId);

    this.socket.fromEvent('user-joined').subscribe(data => {
      // TO-DO: Do something with the joined event
    });

    this.socket.fromEvent('receive-message').subscribe(data => {
      this.messageText = '';
      this.getMessages();
    });
  }

  async sendMessage() {
    await this.socket.emit('send-message', {
      message: this.messageText,
      to: this.messageTo,
      from: this.userId
    });

    this.getMessages();

    this.messageText = '';
  }

  getMessages() {
    if (this.userRole === 'patient') {
      this.messageService
        .getPatientMessages(this.userId)
        .subscribe((data: any) => {
          // Get chat messages to
          const messages = data.data;

          this.messages = messages;

          if (this.navParams.data.doctorId) {
            this.messageTo = this.navParams.data.doctorId;
          } else {
            this.closeChatModal();
          }

          // if (messages.length > 0) {
          //   Has had previous communication with doctor
          //   for (const message of messages) {
          //     if (message.to._id !== this.userId) {
          //       this.messageTo = message.to._id;
          //       break;
          //     }
          //   }
          // } else {
          //   // Has not had previous communication with doctor
          //   // Get Random doctor and assign their ID to the messageTo
          //   this.getRandomDoctor();
          // }
        });
    } else {
      if (this.navParams.data.patientId) {
        this.messageTo = this.navParams.data.patientId;
      } else {
        this.closeChatModal();
      }

      this.messageService
        .getDoctorMessages(this.userId, this.messageTo)
        .subscribe((data: any) => {
          this.messages = data.data;
        });
    }

    setTimeout(() => {
      this.content.scrollToBottom(200);
    });
  }

  async closeChatModal() {
    await this.modalController.dismiss();
  }
}
