import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  imports: [CommonModule],
  templateUrl: './diretivas.component.html',
  styleUrl: './diretivas.component.css',
})
export class DiretivasComponent {
  nome: string = 'Mathias';
  value: number = 1;
  bool: boolean = true;
  nomes: string[] = ['Mathias', 'Jose', 'DAnte', 'Uriel'];
  trocaCor() {
    this.bool = !this.bool;
  }
  adicionaNome(nome: string) {
    this.nomes.push(nome);
  }
}
