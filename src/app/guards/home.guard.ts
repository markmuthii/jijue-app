import { AuthConstantsService } from './../config/auth-constants.service';
import { StorageService } from './../services/storage.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {
  constructor(
    private router: Router,
    private storageService: StorageService,
    private authConstants: AuthConstantsService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return new Promise(resolve => {
      this.storageService
        .get(this.authConstants.AUTH)
        .then(res => {
          if (res) {
            resolve(true);
          } else {
            this.router.navigate(['']);
            resolve(false);
          }
        })
        .catch(err => {
          resolve(false);
        });
    });
  }
}
