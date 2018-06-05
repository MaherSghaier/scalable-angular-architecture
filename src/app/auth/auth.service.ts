import { Injectable } from '@angular/core';
import { ValidationService } from '@shared/utility';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
const JwtHelper = new JwtHelperService();

@Injectable()
export class AuthService {
  constructor(public validationService: ValidationService, private router: Router) {}

  public login(form: any, returnUrl?: string): void {
    const user = { status: 'loggedIn' };
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.router.navigate([returnUrl || '/']);
  }

  public isLoggedIn() {
    const token = localStorage.getItem('id_token');
    return token ? JwtHelper.isTokenExpired(token) : false;
  }

  get currentUser() {
    const token = localStorage.getItem('id_token');
    return token ? JwtHelper.decodeToken(token) : null;
  }
}
