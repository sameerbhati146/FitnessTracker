import { Component, OnInit } from "@angular/core";
import { NgForm, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  FormControl = new FormControl("", [Validators.required, Validators.email]);
  constructor() {}
  ngOnInit() {}

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
