import { Component, OnInit } from "@angular/core";
import { NgForm, FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  // FormControl = new FormControl("", [Validators.required, Validators.email]);
  loginForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl("", [Validators.required]),
    });
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
