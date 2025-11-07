// Louvado seja o Senhor

import { Component, computed, input, signal } from '@angular/core';
import { SaldoComponent } from "./saldo/saldo.component";
import { TransacoesComponent } from "./transacoes/transacoes.component";
import { ContasComponent } from "./contas/contas.component";
import { Conta } from './compartilhados/conta.model';
import { Transacao, TipoTransacao } from './compartilhados/transacao.model';

@Component({
  selector: 'app-area-financeira',
  imports: [SaldoComponent, TransacoesComponent, ContasComponent],
  templateUrl: './area-financeira.component.html',
  styleUrl: './area-financeira.component.css'
})
export class AreaFinanceiraComponent {
  processarTransacoes(transacao : Transacao){
    this.transacoes.update((transacoes) => [transacao, ...transacoes]);
  }

  processarContas(conta : Conta){
    this.contasComSaldoInicial.update((contas) => [conta, ...contas]);
  }

  calcSaldoAtualizado(contaInicial : Conta){
    const transacaoDaConta = this.transacoes().filter((transacao) => {
      return transacao.conta === contaInicial.nome;
    });

    const newSaldo = transacaoDaConta.reduce((acc, transacao) => {
      switch (transacao.tipo) {
        case TipoTransacao.DEPOSITO:
          return acc + transacao.valor;
          
        case TipoTransacao.SAQUE:
          return acc - transacao.valor;
      
        default:
          transacao.tipo satisfies never;
          throw new Error('Tipo de transação inválido!');
      }
    }, contaInicial.saldo)

    return newSaldo;
  }

  transacoes = signal<Transacao[]>([]);

  contasComSaldoInicial = signal<Conta[]>([]);

  contas = computed(() => {
    return this.contasComSaldoInicial().map((conta) => {
      const saldoAtualizado = this.calcSaldoAtualizado(conta); 
      return { ...conta, saldo: saldoAtualizado };
    });
  });

  saldo = computed(() => {
    return this.contas().reduce((acc, conta) => {
      return acc + conta.saldo;
    }, 0);
  });
}
