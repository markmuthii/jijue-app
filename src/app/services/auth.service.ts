import { StorageService } from './storage.service';
import { AuthConstantsService } from './../config/auth-constants.service';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private httpService: HttpService,
    private authConstants: AuthConstantsService,
    private storageService: StorageService,
    private router: Router
  ) {}

  login(data: any) {
    return this.httpService.post('auth/login', data);
  }

  register(data: any) {
    return this.httpService.post('auth/register', data);
  }

  logout() {
    this.storageService.removeItem(this.authConstants.AUTH);
    this.router.navigate(['']);
  }
}
