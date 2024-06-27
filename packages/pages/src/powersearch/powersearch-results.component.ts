import { Component, inject, CUSTOM_ELEMENTS_SCHEMA, HostBinding, computed } from '@angular/core'
import { NgClass } from '@angular/common'
import { SearchInputComponent } from '@lithium/components/search-input'

import { PowersearchDataService } from './services'
import { PowersearchLaunchDocument } from './powersearch-result/documents/document.component'
import { PowersearchLaunchPeopleComponent } from './powersearch-result/people/people.component'

@Component({
  selector: 'ps-launch-results',
  standalone: true,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ PowersearchDataService ],
  imports: [ 
    NgClass,
    SearchInputComponent,
    PowersearchLaunchDocument,
    PowersearchLaunchPeopleComponent
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
              <div class="ps-results-content--documents">
                <ps-launch-document></ps-launch-document>
                <ps-launch-document></ps-launch-document>
                <ps-launch-document></ps-launch-document>
              </div>
              <div class="ps-results-content--people">
                <ps-launch-people></ps-launch-people>
              </div>
              <div class="ps-results-content--documents">
                <ps-launch-document></ps-launch-document>
                <ps-launch-document></ps-launch-document>
                <ps-launch-document></ps-launch-document>
              </div>
            </div>
          </section>
          <section></section>
        </section>
      </li-content>
    </li-layout>
  `,
  styleUrl: './powersearch-results.component.scss'
})
export class PowersearchResultsComponent {
  #service = inject(PowersearchDataService)

  @HostBinding('attr.active') active: string = 'all'

  tabs = computed(() => {
    return [ 'All', ...this.#service.select<string[]>('tabs')() ]
  })

  toggleTab(tab: string) {
    const value = tab.toLowerCase()
    this.active = value === this.active ? '': value
  }
}