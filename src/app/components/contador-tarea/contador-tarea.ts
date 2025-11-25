import { Component, inject } from '@angular/core';
import { TaskManager } from '../../services/task-manager';
import { Tarea } from '../../interfaces/tarea';

@Component({
  selector: 'app-contador-tarea',
  imports: [],
  templateUrl: './contador-tarea.html',
  styleUrl: './contador-tarea.css',
})
export class ContadorTarea {
 
  
  public taskManager=inject(TaskManager);
  
    

    
}
