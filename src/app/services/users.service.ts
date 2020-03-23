import { HttpService } from './http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private httpService: HttpService) {}

  getAllDoctors() {
    return this.httpService.get('users/role/doctor');
  }

  getRelatedUsers(doctorId: string) {
    console.log('Users service ', doctorId);
    return this.httpService.get(`users/patients/${doctorId}`);
  }
}
