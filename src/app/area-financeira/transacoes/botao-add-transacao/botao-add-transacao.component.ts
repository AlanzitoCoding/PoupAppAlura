// Louvado seja o Senhor

import { Component, afterRender, output, signal, input } from '@angular/core';
import { BotaoComponent } from '../../../compartilhados/botao/botao.component';
import { ModalComponent } from '../../../compartilhados/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { KeyValuePipe } from '@angular/common';
import { TipoTransacao, Transacao } from '../../compartilhados/transacao.model';
import { Conta } from '../../compartilhados/conta.model';

@Component({
  selector: 'app-botao-add-transacao',
  imports: [BotaoComponent, ModalComponent, FormsModule, KeyValuePipe],
  templateUrl: './botao-add-transacao.component.html',
  styleUrl: './botao-add-transacao.component.css'
})
export class BotaoAddTransacaoComponent {
  contas = input.required<Conta[]>();

  modalAberto = signal(false);

  novaTransacaoForm = {
    nome: '',
    tipo: '',
    valor: '',
    data: '',
    conta: ''
  };

  tiposTransacao = TipoTransacao;

  transacaoCriada = output<Transacao>();

  constructor(){
    afterRender(() => {
      console.log(this.modalAberto());
    })
  }

  openModal(){
    this.modalAberto.set(true);
  }

  onSubmit(){
    const newTransacao = new Transacao(
      this.novaTransacaoForm.nome,
      this.novaTransacaoForm.tipo as TipoTransacao,
      Number(this.novaTransacaoForm.valor),
      this.novaTransacaoForm.data,
      this.novaTransacaoForm.conta
    );

    this.transacaoCriada.emit(newTransacao);
    this.modalAberto.set(false);
  }
}
