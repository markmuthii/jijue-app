import { AuthConstantsService } from './../../config/auth-constants.service';
import { StorageService } from './../../services/storage.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  public userData = {
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
    private authConstants: AuthConstantsService
  ) {}

  ngOnInit() {}

  loginAction() {
    // console.log(this.userData);
    this.authService.login(this.userData).subscribe(
      (res: any) => {
        if (res.success && res.success !== false) {
          // Login is successful
          this.storageService.store(this.authConstants.AUTH, res.data);
          if (res.data.role === 'doctor') {
            this.router.navigate(['home/doc/chats']);
          } else {
            this.router.navigate(['home']);
          }
        } else {
          // there was an error, either email or password
        }
        console.log(res);
      },
      (error: any) => {
        // There was a network or server error
        console.log('Network or server error ', error);
      }
    );
  }
}
