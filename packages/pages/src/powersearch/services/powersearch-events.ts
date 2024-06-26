import { Component, inject, OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs/internal/Subscription'
import { PowersearchEventService } from './events.service'

@Component({ template: '' })
export class PowersearchEvents implements OnInit, OnDestroy{
  #service = inject(PowersearchEventService)
  #subscription!: Subscription

  active!: string

  #toogleZoomInOut(name: string)  {
    const value = name.toLowerCase()
    this.active = value === this.active ? '': value
    this.#service.toggleParent.next(this.active)
  }

  onZoomInOunt(name: string) {
    this.#service.toggleSection.next(name)
  }

  ngOnInit() {
    this.#subscription = this.#service.toggleSection.asObservable().subscribe({
      next: this.#toogleZoomInOut.bind(this)
    })
  }

  ngOnDestroy() {
    this.#subscription.unsubscribe()
  }
}