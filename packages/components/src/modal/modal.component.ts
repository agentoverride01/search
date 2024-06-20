import { Component, ElementRef, ViewChild } from '@angular/core'

@Component({
  selector: 'modal',
  standalone: true,
  template: `
    <article #modal class="modal">
      <section class="modal--content">
        <span class="modal--close" (click)="onCloseModal()">&times;</span>
        <section class="modal--content--body">
          <ng-content></ng-content>
        </section>
      </section>
    </article>
  `,
  styleUrl: './modal.component.scss'
})
export class ModalComponent { 

  @ViewChild('modal') modal!: ElementRef

  openCloseModal(value: string) {
    const modalElement = this.modal.nativeElement as HTMLElement
    modalElement.style.setProperty(
      '--modal-display', value
    )
  }

  onCloseModal() {
    this.openCloseModal('none')
  }

  onModalOpen() {
    this.openCloseModal('block')
  }
}