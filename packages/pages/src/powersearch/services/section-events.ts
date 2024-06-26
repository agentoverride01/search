import { inject, OnInit, Component, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs/internal/Subscription'

import { PowersearchEventService } from './events.service'

@Component({ template: '' })
export class PowersearchSectionEvents implements OnInit, OnDestroy {
  #events = inject(PowersearchEventService)
  #subscription!: Subscription

  expanded = false

  #setExpanded(value: string) {
    if (value == this.section || !value) {
      this.expanded = !this.expanded
    }
  }

  protected get section() { 
    return ''
  }

  ngOnInit() {
    this.#subscription = this.#events.toggleParent.asObservable().subscribe({
      next: this.#setExpanded.bind(this)
    })
  }

  ngOnDestroy() {
    this.#subscription.unsubscribe()
  }

  onToggle() {
    this.#events.toggleSection.next(this.section)
  }
}