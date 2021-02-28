
import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material";

import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { Exercise } from "../exercise.model";
import { TrainingService } from "../training.service";

@Component({
  selector: "app-past-training",
  templateUrl: "./past-training.component.html",
  styleUrls: ["./past-training.component.css"],
})
export class PastTrainingComponent implements OnInit, AfterViewInit {
  displayedColumns = ["date", "name", "calories", "duration", "state"];
  dataSource = new MatTableDataSource<Exercise>();

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  constructor(public trainingService: TrainingService) {}

  ngOnInit() {
    this.dataSource.data = this.trainingService.getCompletedOrCancelledExercises();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }
}
