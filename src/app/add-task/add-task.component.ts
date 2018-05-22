import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

newTask: string;

constructor(private tasksService: TasksService) { }

ngOnInit() {
}
/*  emitowanie informacji o tym ze powstaja taski, wiec jesli
ktos wpisze nazwe zadania, to ona wyladuje od razu w newTask,
dlatego musimy ja wyemitowac, zebysmy mogli ja
wykorzystac w app componencie */

  add() {
    const task: Task = ({ name: this.newTask, created: new Date()});
    this.tasksService.add(task);
    this.newTask = '';
  }

}
