import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Listado } from "./components/listado/listado";
import { Formulario } from "./components/formulario/formulario";
import { ContadorTarea } from "./components/contador-tarea/contador-tarea";
import { ContenedorFichas } from "./components/contenedor-fichas/contenedor-fichas";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Listado, Formulario, ContadorTarea, ContenedorFichas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Task_Manager');
}
