import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}

  post(path: string, data: any) {
    const headers = new HttpHeaders();
    const options = { headers, withCredentials: false };

    const url = `${environment.apiUrl}${path}`;

    return this.http.post(url, data, options);
  }

  get(path: string) {
    const headers = new HttpHeaders();
    const options = { headers, withCredentials: false };

    const url = `${environment.apiUrl}${path}`;

    return this.http.get<any>(url, options);
  }
}
