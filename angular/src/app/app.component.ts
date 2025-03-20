import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DiretivasComponent } from "./componentes/diretivas/diretivas.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DiretivasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}
