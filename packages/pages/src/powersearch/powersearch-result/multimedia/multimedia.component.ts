import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, ViewChild, ElementRef } from '@angular/core'

import { CollapsableButton } from '../components'
import { PowersearchLaunchMultimediaItem } from './multimedia-item.component'
import { PowersearchLaunchToggleService } from '../toggle-event.service'

@Component({
  selector: 'ps-launch-multimedia',
  standalone: true,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [ PowersearchLaunchMultimediaItem,  CollapsableButton ],
  template: `
    <article class="ps-launch-section">
      <li-header>
        <span>Videos and Multimedia</span>
      </li-header>
      <li-content>
        <section #section class="ps-launch-section--items">
          <ps-launch-multimedia-item />
          <ps-launch-multimedia-item />
          <ps-launch-multimedia-item />
          <ps-launch-multimedia-item />
          <ps-launch-multimedia-item />
          <ps-launch-multimedia-item />
        </section>
        <footer>
          <ps-collapsable-button (onToggle)="onToggle()">
            <span>{{textToggle}}</span>
          </ps-collapsable-button>
        </footer>
      </li-content>
    </article>
  `,
  styleUrl: './multimedia.component.scss'
})
export class PowersearchLaunchMultimedia {
  #toggle = inject(PowersearchLaunchToggleService)

  #textToggle!: string
  #isShowMore!: boolean

  @ViewChild('section') section!: ElementRef<HTMLElement>

  readonly limitTo: number = 4

  #setTextToggle() {
    this.#textToggle = 6 < this.limitTo 
      ? 'See all videos and multimedia'
      : `${6 - this.limitTo} more videos and multimedia`
  }

  #toggleParent(value: string) {
    value === 'multimedia' ? this.#onToggle(): this.#reset()
  }

  #reset() {
    this.#isShowMore = false
    this.#setTextToggle()
    this.section?.nativeElement.classList.remove('active')
  }

  #onToggle() {
    this.#isShowMore = true
    this.section.nativeElement.classList.add('active')
    this.#textToggle = 'See all videos and multimedia'
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
    this.#isShowMore && this.#toggle.toggleParent.next('multimedia')
    this.#onToggle()
  }
}