import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  @Output() openSideNav = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  openSideNavClick() {
    this.openSideNav.emit();
  }
}
