import { Component, Input } from '@angular/core';
import { Tarea } from '../../interfaces/tarea';

@Component({
  selector: 'app-ficha-tarea',
  imports: [],
  templateUrl: './ficha-tarea.html',
  styleUrl: './ficha-tarea.css',
})
export class FichaTarea {
  @Input() public tarea : Tarea | undefined;
}
