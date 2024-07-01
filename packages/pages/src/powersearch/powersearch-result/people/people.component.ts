import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, ViewChild, ElementRef } from '@angular/core'
import { NgClass } from '@angular/common'

import { Pagination } from '@lithium/components/pagination'

import { PowersearchLauncPeopleItem } from './people-item.component'
import { PowersearchLauncPeopleService } from './people-data.service'

import { CollapsableButton } from '../components'
import { PowersearchLaunchToggleService } from '../toggle-event.service'

import { Person } from './types'

@Component({
  selector: 'ps-launch-people',
  standalone: true,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [ Pagination, NgClass, PowersearchLauncPeopleItem, CollapsableButton ],
  providers: [ PowersearchLauncPeopleService ],
  template: `
    <section class="ps-launch-section">
      <li-header>
        <span>People</span>
      </li-header>
      <li-content>
        <section #section class="ps-launch-section--items">
          @for (p of people(); let i = $index; track p.id) {                  
            <ps-launch-people-item [value]="p" />                                 
          }
        </section>
        <footer>
          <ps-collapsable-button (onToggle)="onToggle()">
            <span>{{textToggle}}</span>
          </ps-collapsable-button>
        </footer>
      </li-content>
      <li-footer>
        <pagination></pagination>
      </li-footer>
    </section>
  `,
  styleUrl: './people.component.scss'
})
export class PowersearchLaunchPeople implements OnInit { 
  #toggle = inject(PowersearchLaunchToggleService)
  #service = inject(PowersearchLauncPeopleService)

  #textToggle!: string
  #isShowMore!: boolean

  @ViewChild('section') section!: ElementRef<HTMLElement>

  readonly people = this.#service.select<Person[]>('people')
  readonly limitTo: number = 4

  get #peopleLength() {
    return this.people().length
  }

  #setTextToggle() {
    this.#textToggle = this.#peopleLength < this.limitTo 
      ? 'See all People'
      : `${this.#peopleLength - this.limitTo} more people`
  }
  
  #toggleParent(value: string) {
    value === 'people' ? this.#onToggle(): this.#reset()
  }

  #reset() {
    this.#isShowMore = false
    this.#setTextToggle()
    this.section?.nativeElement.classList.remove('active')
  }

  #onToggle() {
    this.#isShowMore = true
    this.section.nativeElement.classList.add('active')
    this.#textToggle = 'See all People'
  }
  
  get textToggle() {
    return this.#textToggle
  }

  ngOnInit() {
    this.#reset()
    this.#toggle.toggle.asObservable().subscribe({
      next: this.#toggleParent.bind(this)
    })
  }

  onToggle() {
    this.#isShowMore && this.#toggle.toggleParent.next('people')
    this.#onToggle()
  }
}