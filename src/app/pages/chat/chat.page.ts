import { UsersService } from './../../services/users.service';
import { MessagesService } from './../../services/messages.service';
import { AuthConstantsService } from './../../config/auth-constants.service';
import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

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

  constructor(
    private socket: Socket,
    private storageService: StorageService,
    private authConstants: AuthConstantsService,
    private messageService: MessagesService,
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.storageService
      .get(this.authConstants.AUTH)
      .then((userData: any) => {
        this.currentUser = this.userId = userData.id;
        console.log('Current UserID: ', this.userId);
        // Set the User's role (either doctor or patient)
        this.userRole = userData.role;
      });

    // Get Messages
    this.getMessages();

    this.socket.connect();

    this.socket.emit('set-user-id', this.userId);

    this.socket.fromEvent('user-joined').subscribe(data => {
      console.log('Data from user-joined event: ', data);
    });

    this.socket.fromEvent('receive-message').subscribe(data => {
      console.log('Data from receive-message event: ', data);
      this.messageText = '';
      this.getMessages();
    });
  }

  sendMessage() {
    console.log('Message to: ' + this.messageTo);
    this.socket.emit('send-message', {
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
          console.log('Current user Messages: ', data);
          // Get chat messages to
          const messages = data.data;

          this.messages = messages;
          console.log(this.userRole);

          // Is patient
          console.log(messages.length);
          if (messages.length > 0) {
            // Has had previous communication with doctor
            for (const message of messages) {
              if (message.to._id !== this.userId) {
                this.messageTo = message.to._id;
                break;
              }
            }
          } else {
            // Has not had previous communication with doctor
            // Get Random doctor and assign their ID to the messageTo
            this.getRandomDoctor();
          }
        });
    } else {
      // Is Doctor
      this.route.queryParams.subscribe((params: any) => {
        if (params && params.patientId) {
          this.messageTo = params.patientId;
        }
      });

      this.messageService
        .getDoctorMessages(this.userId, this.messageTo)
        .subscribe((data: any) => {
          this.messages = data.data;
        });
    }

    console.log('Message to: ' + this.messageTo);

    console.log('Messages: ', this.messages);
  }

  getRandomDoctor() {
    this.usersService.getAllDoctors().subscribe((data: any) => {
      const doctors = data.data;

      console.log('Get all doctors: ', doctors);

      const randDoc = doctors[Math.floor(Math.random() * doctors.length)];

      console.log('Random Doc: ', randDoc);

      this.messageTo = randDoc._id;
    });
  }
}
