import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthConstantsService {
  public readonly AUTH: string = 'jijue-user-data';

  constructor() {}
}
