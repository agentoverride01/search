import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ResizeButtonComponent } from '@lithium/components/resize'

import { PowerSearchPageItemComponent } from './page-item.component'
import { PowersearchSectionEvents } from '../services'

@Component({
  selector: 'ps-pages',
  standalone: true,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [ 
    PowerSearchPageItemComponent,
    ResizeButtonComponent
  ],
  template: `
    <li-card>
      <li-header>
        <span>Pages</span>
        <resize-button 
          [expanded]="expanded" 
          (onToggle)="onToggle()"></resize-button>
      </li-header>
      <li-content>
        <header></header>
        <section class="ps-pages-content">
          <ps-page-item></ps-page-item>
          <ps-page-item></ps-page-item>
          <ps-page-item></ps-page-item>
          <ps-page-item></ps-page-item>
          <ps-page-item></ps-page-item>
          <ps-page-item></ps-page-item>
          <ps-page-item></ps-page-item>
        </section>
      </li-content>
      <li-footer></li-footer>
    </li-card>
  `,
  styleUrl: './pages.component.scss'
})
export class PowerSearchPagesComponent extends PowersearchSectionEvents { 
  #section = 'pages'

  override get section() {
    return this.#section
  }
}