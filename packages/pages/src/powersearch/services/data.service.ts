import { Injectable, signal, computed } from '@angular/core'
import { PowersearchData } from './types'

@Injectable()
export class PowersearchDataService {
  #state = signal<PowersearchData>({
    tabs: [ 'Documents', 'People', 'Pages', 'Deal', 'Multimedia' ]
  })

  select<T>(key: keyof PowersearchData) {
    return computed<T>(() => this.#state()[key] as T)
  }
}