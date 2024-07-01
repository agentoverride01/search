import { Component, inject, input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

import { Pagination } from '@lithium/components/pagination'

import { PowersearchLaunchDocument } from './document.component'
import { PowersearchLaunchDocumentsService } from './documents-data.service'
import { DocumentsLimitToPipe } from './documents.pipe'

import {  DocumentItem, LimitConfig } from './types'

@Component({
  selector: 'ps-launch-documents',
  standalone: true,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [ Pagination, PowersearchLaunchDocument, DocumentsLimitToPipe ],
  providers: [ PowersearchLaunchDocumentsService ],
  template: `
    <section class="ps-launch-section">
      <li-content>
        <section>
          @for (doc of documents() | limiTo: limitTo(); track doc.id) {
            <ps-launch-document [value]="doc" />
          }
        </section>
      </li-content>
    </section>
  `,
  styles: /* scss */`
    :host {
      display: var(--ps-launch-host-section-display);
    }

    .ps-launch-section {
      row-gap: 20px;
    }
  `
})
export class PowersearchLaunchDocuments {
  #service = inject(PowersearchLaunchDocumentsService)
  
  documents = this.#service.select<DocumentItem[]>('documents')

  limitTo = input<LimitConfig>()
}