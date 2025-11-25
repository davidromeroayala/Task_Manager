import { Injectable } from '@angular/core';
import { Tarea } from '../interfaces/tarea';

@Injectable({
  providedIn: 'root',
})
export class TaskManager {
  private tasks: Tarea[] = [];
  constructor(){
    this.tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')!):[];
    console.log(this.tasks);
  }
  public addTask(task: Tarea): void {
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
  public removeTask(task: Tarea): void { }
  public getTasks(): Tarea[] {
    return this.tasks;
  }
}
