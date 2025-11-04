// Louvado seja o Senhor

import { Component, signal } from '@angular/core';
import { BotaoComponent } from '../../../compartilhados/botao/botao.component';
import { ModalComponent } from '../../../compartilhados/modal/modal.component';

@Component({
  selector: 'app-botao-add-transacao',
  imports: [BotaoComponent, ModalComponent],
  templateUrl: './botao-add-transacao.component.html',
  styleUrl: './botao-add-transacao.component.css'
})
export class BotaoAddTransacaoComponent {
  modalAberto = signal(false);

  openModal(){
    this.modalAberto.set(true);
  }
}
