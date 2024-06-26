import { Component, CUSTOM_ELEMENTS_SCHEMA, HostBinding, inject } from '@angular/core'
import { NgClass } from '@angular/common'

import { PowerSearchDocumentsComponent } from './documents/documents.component'
import { PowerSearchPeopleComponent } from './people/people.component'
import { PowerSearchMyDealComponent } from './mydeal/mydeal.component'
import { PowerSearchPagesComponent } from './pages/pages.component'
import { PowerSearchMultimediaComponent } from './multimedia/multimedia.component'
import { PowersearchResearchReportComponent } from './research-report/research-report.component'

import { 
  PowersearchSectionEvents, 
  PowersearchEventService, 
  PowersearchEvents,
  PowersearchDataService
} from './services'

@Component({
  selector: 'gl-powersearch',
  standalone: true,
  schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA 
  ],
  imports: [ 
    PowerSearchDocumentsComponent,
    PowerSearchPeopleComponent,
    PowerSearchMyDealComponent,
    PowerSearchPagesComponent,
    PowerSearchMultimediaComponent,
    PowersearchResearchReportComponent,
    NgClass
  ],
  providers: [ 
    PowersearchEventService, 
    PowersearchDataService,
    PowersearchSectionEvents 
  ],
  template: `
    <li-layout>
      <li-header>
        <div>There are 500 items found</div>
        <div>
          <ul>
            @for (tab of tabs(); track tab) {
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
            <ps-research-report></ps-research-report>
            <ps-multimedia></ps-multimedia>
          </section>
        </section>
      </li-content>
    </li-layout>
  `,
  styleUrl: './powersearch.component.scss'
})
export class PowersearchComponent extends PowersearchEvents {  
  #service = inject(PowersearchDataService)

  tabs = this.#service.select<string[]>('tabs')

  @HostBinding('attr.active') override active!: string
}