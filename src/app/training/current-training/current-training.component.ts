import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { MatDialog } from "@angular/material";

import { DialogboxComponent } from "../../common/dialogbox/dialogbox.component";
import { TrainingService } from "../training.service";

@Component({
  selector: "app-current-training",
  templateUrl: "./current-training.component.html",
  styleUrls: ["./current-training.component.css"],
})
export class CurrentTrainingComponent implements OnInit {
  // @Output() trainingExit = new EventEmitter();
  progress = 0;
  timer: number;

  constructor(
    private matDialog: MatDialog,
    private trainingService: TrainingService
  ) {}

  ngOnInit() {
    this.startTraining();
  }

  startTraining() {
    const step =
      (this.trainingService.getRunningExercise().duration / 100) * 1000;
    this.timer = setInterval(() => {
      this.progress = this.progress + 1;
      if (this.progress >= 100) {
        this.trainingService.completeTraining();
        clearInterval(this.timer);
      }
    }, step);
  }

  completeExercise() {}

  cancelExercise() {}

  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.matDialog.open(DialogboxComponent, {
      data: {
        progress: this.progress,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.trainingService.cancelTraining(this.progress);
      } else {
        this.startTraining();
      }
    });
  }
}
