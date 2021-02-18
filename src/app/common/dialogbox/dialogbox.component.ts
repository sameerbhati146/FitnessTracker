import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-dialogbox",
  templateUrl: "./dialogbox.component.html",
  styleUrls: ["./dialogbox.component.css"],
})
export class DialogboxComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public passsedData: any) {}

  ngOnInit() {}
}
