import { HttpService } from './http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor(private httpService: HttpService) {}

  getPatientMessages(userId: string, role: string = 'patient') {
    return this.httpService.get(`messages/${role}/${userId}`);
  }

  getDoctorMessages(
    doctorId: string,
    patientId: string,
    role: string = 'doctor'
  ) {
    return this.httpService.get(`messages/${role}/${doctorId}/${patientId}`);
  }
}
