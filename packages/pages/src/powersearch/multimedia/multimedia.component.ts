import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

import { PowerSearchMultimediaItemComponent } from './multimedia-item.component'
import { PowersearchSectionEvents } from '../services'
import { ResizeButtonComponent } from '@lithium/components/resize'

@Component({
  selector: 'ps-multimedia',
  standalone: true,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [ 
    PowerSearchMultimediaItemComponent,
    ResizeButtonComponent
  ],
  template: `
    <li-card>
      <li-header>
        <span>Videos and Multimedia</span>
        <resize-button 
          [expanded]="expanded" 
          (onToggle)="onToggle()"></resize-button>
      </li-header>
      <li-content>
        <section class="ps-multimedia-content">
          <ps-multimedia-item></ps-multimedia-item>
          <ps-multimedia-item></ps-multimedia-item>
          <ps-multimedia-item></ps-multimedia-item>
          <ps-multimedia-item></ps-multimedia-item>
        </section>
      </li-content>
      <li-footer></li-footer>
    </li-card>
  `,
  styleUrl: './multimedia.component.scss'
})
export class PowerSearchMultimediaComponent extends PowersearchSectionEvents { 
  #section = 'multimedia'

  override get section() {
    return this.#section
  }
}