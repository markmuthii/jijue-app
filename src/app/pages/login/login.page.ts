import { ToastService } from './../../services/toast.service';
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

  btnText = 'Login';
  isRunning = false;

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
    private authConstants: AuthConstantsService,
    private toast: ToastService
  ) {}

  ngOnInit() {}

  loginAction() {
    this.btnText = 'Please wait';
    this.isRunning = true;
    // console.log(this.userData);
    this.authService.login(this.userData).subscribe(
      (res: any) => {
        if (res.success && res.success !== false) {
          // Login is successful
          this.toast.showToast('Login successful.', 2000);
          this.storageService.store(this.authConstants.AUTH, res.data);
          if (res.data.role === 'doctor') {
            this.router.navigate(['doc']);
          } else {
            this.router.navigate(['home']);
          }
        } else {
          // there was an error, either email or password
          this.btnText = 'Login';
          this.isRunning = false;
          this.toast.showToast('Invalid credentials. Please try again.', 3000);
        }
        console.log(res);
      },
      (error: any) => {
        // There was a network or server error
        this.btnText = 'Login';
        this.isRunning = false;
        let message = 'Something went wrong. Please try agan.';
        if (error.status === 400) {
          message = 'Please check your inputs and try again.';
        } else if (error.status === 0) {
          message =
            'There was a problem connecting to the server. Please check your connection and try again.';
        }
        this.toast.showToast(message, 3000);
      }
    );
  }
}
