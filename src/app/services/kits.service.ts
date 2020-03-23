import { HttpService } from './http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KitsService {
  constructor(private httpService: HttpService) {}

  registerKit(data: any) {
    return this.httpService.post('kits', data);
  }

  getKitsByUserId(userId: any) {
    return this.httpService.get(`kits/${userId}`);
  }

  getAllKits() {}
}
