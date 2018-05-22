import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  /* On nie zawiera tej listy zadan, wiec musi ja skads dostac,
  skoro jet to podrzedny komponent on zajmuje sie tylko wysietlaniem */

  tasksList: Array<Task> = [];


  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksListObs().subscribe((tasks: Array<Task>) => {
      this.tasksList = tasks;
    });
  }

  ngOnInit() {
  }

  /* z tego komponentu emitujemy do gory do naszego app component,
  bo w app componencie posiadamy te glowne arraye tasksList i tasksDone
  i na nich bedziemy wykonywac te operacje
  wiec potrzebne sa nam dwa emitery done i remove w outpucie
  a gdy ktos kliknie nasze przyciski te metody musza wyemitowac
  te informacje do gory */
  remove(task: Task) {
    this.tasksService.remove(task);

  }
  done(task: Task) {
    task.end = new Date();
    this.tasksService.done(task);
  }

  getColor(): string {
    return this.tasksList.length >= 5 ? 'red' : 'green';
  }
}
