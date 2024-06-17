import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core'

import { PowerSearchDocumentsComponent } from './documents/documents.component'
import { PowerSearchPeopleComponent } from './people/people.component'
import { PowerSearchMyDealComponent } from './mydeal/mydeal.component'
import { PowerSearchPagesComponent } from './pages/pages.component'
import { PowerSearchMultimediaComponent } from './multimedia/multimedia.component'

import { ZoomInOutService } from './services/zoom-in-out'

@Component({
  selector: 'gl-powersearch',
  standalone: true,
  template: `
    <li-layout>
      <li-header>
        <div>There are 500 items found</div>
        <ul>
          @for (tab of tabs; track tab) {
            <li (click)="onZoomInOunt(tab)">{{ tab }}</li>
          }
        </ul>        
      </li-header>
      <li-content>
        <section>
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
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [ 
    PowerSearchDocumentsComponent,
    PowerSearchPeopleComponent,
    PowerSearchMyDealComponent,
    PowerSearchPagesComponent,
    PowerSearchMultimediaComponent
  ],
  providers: [ ZoomInOutService ]
})
export class PowersearchComponent { 
  #zoomInOut = inject(ZoomInOutService)

  tabs = [ 'Documents', 'People', 'Pages', 'Multimedia', 'News' ]

  onZoomInOunt(name: string) {
    this.#zoomInOut.zoomOut(name.toLowerCase())
  }
}