// Louvado seja o Senhor

import { Component, input, output } from '@angular/core';
import { ContaComponent } from "./conta/conta.component";
import { Conta } from '../compartilhados/conta.model';
import { CardComponent } from '../compartilhados/card/card.component';
import { BotaoAddContaComponent } from './botao-add-conta/botao-add-conta.component';

@Component({
  selector: 'app-contas',
  imports: [ContaComponent, CardComponent, BotaoAddContaComponent],
  templateUrl: './contas.component.html',
  styleUrl: './contas.component.css'
})
export class ContasComponent {
  contas = input.required<Conta[]>();

  contaCriada = output<Conta>();
}
