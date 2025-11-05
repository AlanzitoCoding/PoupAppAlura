// Louvado seja o Senhor

import { Component, afterRender, signal } from '@angular/core';
import { BotaoComponent } from '../../../compartilhados/botao/botao.component';
import { ModalComponent } from '../../../compartilhados/modal/modal.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-botao-add-transacao',
  imports: [BotaoComponent, ModalComponent, FormsModule],
  templateUrl: './botao-add-transacao.component.html',
  styleUrl: './botao-add-transacao.component.css'
})
export class BotaoAddTransacaoComponent {
  modalAberto = signal(false);

  novaTransacaoForm = {
    nome: '',
    tipo: '',
    valor: '',
    data: '',
    conta: ''
  }

  constructor(){
    afterRender(() => {
      console.log(this.modalAberto());
    })
  }

  openModal(){
    this.modalAberto.set(true);
  }

  onSubmit(){
    console.log(this.novaTransacaoForm);
    this.modalAberto.set(false);
  }
}
