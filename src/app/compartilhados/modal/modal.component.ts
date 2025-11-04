// Louvado seja o Senhor

import { Component, ElementRef, afterRender, input, viewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  modal = viewChild.required<ElementRef<HTMLDialogElement>>('transacaoModal');
  isOpen = input(false);

  constructor(){
    afterRender(() => {
      if(this.isOpen()){
        this.modal().nativeElement.showModal();
      }
    });
  }
}
