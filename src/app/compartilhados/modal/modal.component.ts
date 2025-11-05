// Louvado seja o Senhor

import { Component, ElementRef, afterRender, model, viewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  modal = viewChild.required<ElementRef<HTMLDialogElement>>('transacaoModal');
  isOpen = model(false);
  
  constructor(){
    afterRender(() => {
      if(this.isOpen()){
        this.modal().nativeElement.showModal();
      } 
      else {
        this.modal().nativeElement.close();
      }
    });
  }

  closeModal(){
    this.isOpen.set(false);
  }
}
