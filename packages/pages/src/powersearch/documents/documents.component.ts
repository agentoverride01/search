import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

import { ResizeButtonComponent } from '@lithium/components/resize'
import { PowersearchSectionEvents } from '../services'

@Component({
  selector: 'ps-documents',
  standalone: true,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [ ResizeButtonComponent ],
  template: `
    <li-card>
      <li-header>
        <span>Documents</span>
        <resize-button 
          [expanded]="expanded" 
          (onToggle)="onToggle()"></resize-button>
      </li-header>
      <li-content>
        <header>
          <ul>
            <li>All</li>
            <li>Case Study</li>
            <li>Deal Process</li>
            <li>Initiative</li>
            <li>Learning</li>
            <li>lirket Update</li>            
          </ul>
        </header>
        <section>
          <ul>
            <li>
              <div>
                <span>lirket Update</span>
              </div>
              <div>lirket Update - Pass to pending item</div>
              <div>
                <span>Published 29-liy-24</span>
                <span>...</span>
              </div>
            </li>
            <li>
              <div>
                <span>lirket Update</span>
              </div>
              <div>lirket Update - Checking in pending item tab</div>
              <div>
                <span>Published 29-liy-24</span>
                <span>...</span>
              </div>
            </li>
            <li>
              <div>
                <span>Case Study</span>
              </div>
              <div>Case Study - test 1243 (Chinese)</div>
              <div>
                <span>Published 10-April-24</span>
                <span>...</span>
              </div>
            </li>
            <li>
              <div>
                <span>Case Study</span>
              </div>
              <div>Case Study - test 1243 (Chinese)</div>
              <div>
                <span>Published 10-April-24</span>
                <span>...</span>
              </div>
            </li>
            <li>
              <div>
                <span>Case Study</span>
              </div>
              <div>Case Study - test 1243 (Chinese)</div>
              <div>
                <span>Published 10-April-24</span>
                <span>...</span>
              </div>
            </li>                                     
          </ul>
        </section>
      </li-content>
      <li-footer></li-footer>
    </li-card>
  `,
  styleUrl: './documents.component.scss'
})
export class PowerSearchDocumentsComponent extends PowersearchSectionEvents { 
  #section = 'documents'

  override get section() {
    return this.#section
  }
}