// Louvado seja o Senhor

import { Component, signal, output } from '@angular/core';
import { BotaoComponent } from '../../../compartilhados/botao/botao.component';
import { ModalComponent } from '../../../compartilhados/modal/modal.component';
import { Conta } from '../../compartilhados/conta.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-botao-add-conta',
  imports: [BotaoComponent, ModalComponent, FormsModule],
  templateUrl: './botao-add-conta.component.html',
  styleUrl: './botao-add-conta.component.css'
})
export class BotaoAddContaComponent {
  modalAberto = signal(false);

  novaContaForm = {
    nome: '',
    saldoInicial: ''
  };

  contas = Conta;

  contaCriada = output<Conta>();

  openModal(){
    this.modalAberto.set(true);
  }
  
  onSubmit(){
    const newConta = new Conta(
      this.novaContaForm.nome,
      Number(this.novaContaForm.saldoInicial),
    );
      
    this.contaCriada.emit(newConta);
    this.modalAberto.set(false);
  }
}
