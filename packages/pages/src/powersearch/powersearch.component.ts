import { Component, CUSTOM_ELEMENTS_SCHEMA, HostBinding } from '@angular/core'
import { NgClass } from '@angular/common'

import { PowerSearchDocumentsComponent } from './documents/documents.component'
import { PowerSearchPeopleComponent } from './people/people.component'
import { PowerSearchMyDealComponent } from './mydeal/mydeal.component'
import { PowerSearchPagesComponent } from './pages/pages.component'
import { PowerSearchMultimediaComponent } from './multimedia/multimedia.component'

@Component({
  selector: 'gl-powersearch',
  standalone: true,
  template: `
    <li-layout>
      <li-header>
        <div>There are 500 items found</div>
        <div>
          <ul>
            @for (tab of tabs; track tab) {
              <li 
                [ngClass]="{
                  'active': active === tab.toLowerCase()
                }"
                (click)="onZoomInOunt(tab)">{{ tab }}</li>
            }
          </ul>
          <div></div>
        </div>      
      </li-header>
      <li-content>
        <section class="ps-content">
          <section>
            <ps-documents></ps-documents>
            <ps-pages></ps-pages>
          </section>
          <section>
            <ps-people></ps-people>
            <ps-mydeal></ps-mydeal>
            <ps-multimedia></ps-multimedia>
          </section>
        </section>
      </li-content>
    </li-layout>
  `,
  styleUrl: './powersearch.component.scss',
  schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA 
  ],
  imports: [ 
    PowerSearchDocumentsComponent,
    PowerSearchPeopleComponent,
    PowerSearchMyDealComponent,
    PowerSearchPagesComponent,
    PowerSearchMultimediaComponent,
    NgClass
  ]
})
export class PowersearchComponent {  
  tabs = [ 'Documents', 'People', 'Pages', 'Deal', 'Multimedia' ]

  @HostBinding('attr.active') active!: string

  onZoomInOunt(name: string) {
    const value = name.toLowerCase()
    this.active = value === this.active ? '': value
  }
}