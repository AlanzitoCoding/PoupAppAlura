// Louvado seja o Senhor

import { Component, input } from '@angular/core';
import { TransacaoComponent } from "./transacao/transacao.component";
import { Transacao } from '../compartilhados/transacao.model';
import { CardComponent } from '../compartilhados/card/card.component';
import { BotaoAddTransacaoComponent } from './botao-add-transacao/botao-add-transacao.component';

@Component({
  selector: 'app-transacoes',
  imports: [TransacaoComponent, CardComponent, BotaoAddTransacaoComponent],
  templateUrl: './transacoes.component.html',
  styleUrl: './transacoes.component.css'
})
export class TransacoesComponent {
  transacoes = input.required<Transacao[]>();
}
