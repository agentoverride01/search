import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

import { PowerSearchPageItemComponent } from './page-item.component'

@Component({
  selector: 'ps-pages',
  standalone: true,
  template: `
    <li-card>
      <li-header>
        <span>Pages</span>
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
  styleUrl: './pages.component.scss',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [ 
    PowerSearchPageItemComponent 
  ]
})
export class PowerSearchPagesComponent { }