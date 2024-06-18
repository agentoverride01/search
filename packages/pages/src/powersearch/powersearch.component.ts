import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core'

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
        <ul>
          @for (tab of tabs; track tab) {
            <li (click)="onZoomInOunt(tab)">{{ tab }}</li>
          }
        </ul>        
      </li-header>
      <li-content>
        <section #psContent class="row">
          <section>
            <ps-documents></ps-documents>
            <ps-pages></ps-pages>
          </section>
          <section>
            <ps-people></ps-people>
            <ps-mydeal></ps-mydeal>
            <ps-multimedia></ps-multimedia>
          </section>

          <!-- <div class="column-60 column-gap">
            <ps-documents></ps-documents>
            <ps-pages></ps-pages>
          </div>
          <div class="column column-gap">
            <ps-people></ps-people>
            <ps-mydeal></ps-mydeal>
            <ps-multimedia></ps-multimedia>
          </div> -->
          
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
  ]
})
export class PowersearchComponent {  
  tabs = [ 'Documents', 'People', 'Pages', 'Multimedia', 'News' ]

  @ViewChild('psContent') psContent!: ElementRef

  onZoomInOunt(name: string) {
    this.psContent.nativeElement.classList.toggle(
      name.toLowerCase()
    )
  }
}