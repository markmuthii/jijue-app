import { ToastService } from './../../services/toast.service';
import { AuthConstantsService } from './../../config/auth-constants.service';
import { StorageService } from './../../services/storage.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
  public userData = {
    name: '',
    email: '',
    password: '',
    phone: '',
    age: '',
    gender: '',
    role: 'patient'
  };

  btnText = 'Register';
  isRunning = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private authConstants: AuthConstantsService,
    private storageService: StorageService,
    private toast: ToastService
  ) {}

  ngOnInit() {}

  registerAction() {
    this.isRunning = true;
    this.btnText = 'Please wait...';

    console.log(this.userData);
    this.authService.register(this.userData).subscribe(
      (res: any) => {
        if (res.success && res.success !== false) {
          // Successful registration
          this.storageService.store(this.authConstants.AUTH, res.data);
          this.toast.showToast('Registration successful.', 2000);
          this.router.navigate(['home']);
        } else {
          // Registration unsuccessful
          console.log('Uh, problems');
          this.toast.showToast(res.message, 2000);
          this.isRunning = false;
          this.btnText = 'Register';
        }
      },
      (error: any) => {
        // Network or Server error
        this.isRunning = false;
        this.btnText = 'Register';
        console.log('Network or server error', error);
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
