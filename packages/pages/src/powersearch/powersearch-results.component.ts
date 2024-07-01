import { Component, inject, CUSTOM_ELEMENTS_SCHEMA, HostBinding, OnInit, computed } from '@angular/core'
import { NgClass } from '@angular/common'

import { SearchInputComponent } from '@lithium/components/search-input'
import { Pagination } from '@lithium/components/pagination'

import { PowersearchLaunchDocuments } from './powersearch-result/documents/documents.component'
import { PowersearchLaunchPeople } from './powersearch-result/people/people.component'
import { PowersearchLaunchPages } from './powersearch-result/pages/pages.component'
import { PowersearchLaunchMultimedia } from './powersearch-result/multimedia/multimedia.component'

import { PowersearchDataService } from './services'
import { PowersearchLaunchToggleService } from './powersearch-result/toggle-event.service'

@Component({
  selector: 'ps-launch-results',
  standalone: true,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ PowersearchDataService, PowersearchLaunchToggleService ],
  imports: [ 
    NgClass,
    SearchInputComponent,
    PowersearchLaunchDocuments,
    PowersearchLaunchPeople,
    PowersearchLaunchPages,
    PowersearchLaunchMultimedia,
    Pagination
  ],
  template: `
    <li-layout>
      <li-header>
        <search-input></search-input>
        <div>
          <div></div>
          <ul>
            @for (tab of tabs(); track tab) {
              <li 
                [ngClass]="{
                  'active': active === tab.toLowerCase()
                }"
                (click)="toggleTab(tab)">{{tab}}
              </li>
            }          
          </ul>
        </div>
      </li-header>
      <li-content>
        <section>
          <section>
            <div></div>
            <div class="ps-results-content">
              <ps-launch-documents [limitTo]="{ to: 3 }" />
              <ps-launch-people />
              <ps-launch-documents [limitTo]="{ from: 4 }" />
              <ps-launch-pages />
              <ps-launch-multimedia />
            </div>
          </section>
          <section></section>
        </section>
      </li-content>
      <li-footer>
        
      </li-footer>
    </li-layout>
  `,
  styleUrl: './powersearch-results.component.scss'
})
export class PowersearchResultsComponent implements OnInit {
  #toggle = inject(PowersearchLaunchToggleService)
  #service = inject(PowersearchDataService)

  @HostBinding('attr.active') active: string = 'all'

  tabs = computed(() => {
    return [ 'All', ...this.#service.select<string[]>('tabs')() ]
  })

  toggleTab(tab: string) {
    const value = tab.toLowerCase()
    this.active = value === this.active ? '': value
    this.#toggle.toggle.next(this.active)
  }

  ngOnInit() {
    this.#toggle.toggleParent.asObservable().subscribe({
      next: this.toggleTab.bind(this)
    })
  }
}