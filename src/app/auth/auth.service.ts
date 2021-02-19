import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

import { AuthData } from "./auth-data.model";
import { User } from "./user.model";

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private user: User;

  constructor(public router: Router) {}

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString(),
    };
    this.authSuccessful();
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString(),
    };
    this.authSuccessful();
  }

  logout() {
    this.user = null;
    this.authUnsuccessful();
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user != null;
  }

  authSuccessful() {
    this.authChange.next(true);
    this.router.navigate(["/training"]);
  }

  authUnsuccessful() {
    this.authChange.next(false);
    this.router.navigate(["/login"]);
  }
}
