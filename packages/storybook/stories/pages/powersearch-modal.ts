import { Component, ViewChild } from '@angular/core'

import { ModalComponent } from '@lithium/components/modal'
import { SearchInputComponent } from '@lithium/components/search-input'

@Component({
  selector: 'powersearch-modal',
  standalone: true,
  template: `
    <article>
      <modal #modal>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type 
        specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, 
        remaining essentially unchanged
      </modal>
      <search-input (onFocus)="onFocus()"></search-input>
    </article>
  `,
  imports: [ ModalComponent, SearchInputComponent ]
})
export class PowerSearchModal { 

  @ViewChild('modal') modal!: ModalComponent

  onFocus() {
    const element = this.modal
    element.onModalOpen()
  }
}