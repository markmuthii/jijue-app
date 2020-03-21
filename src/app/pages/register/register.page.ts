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
    gender: ''
  };

  constructor(
    private router: Router,
    private authService: AuthService,
    private authConstants: AuthConstantsService,
    private storageService: StorageService
  ) {}

  ngOnInit() {}

  registerAction() {
    console.log(this.userData);
    this.authService.register(this.userData).subscribe(
      (res: any) => {
        if (res.success && res.success !== false) {
          // Successful registration
          this.storageService.store(this.authConstants.AUTH, res.data);
          this.router.navigate(['home']);
        } else {
          // Registration unsuccessful
          console.log('Uh, problems');
        }
      },
      (error: any) => {
        // Network or Server error
        console.log('Network or server error', error);
      }
    );
  }
}
