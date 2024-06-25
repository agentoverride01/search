import type { PeopleData } from '@lithium/pages/types'

import { Injectable, signal, computed } from '@angular/core'

@Injectable()
export class PeopleService {
  #imgSrc = 'https://2019.ng-my.org/assets/imgs/speakers/arjay-elbore.webp'

  #state = signal<PeopleData>({
    people: [
      { id: 1, name: 'Arjay Elbore', position: 'Software Engineer', src: this.#imgSrc },
      { id: 2, name: 'Arjay Elbore', position: 'Software Engineer', src: this.#imgSrc },
      { id: 3, name: 'Arjay Elbore', position: 'Software Engineer', src: this.#imgSrc },
      { id: 4, name: 'Arjay Elbore', position: 'Software Engineer', src: this.#imgSrc }
    ]
  })

  select<T>(key: keyof PeopleData) {
    return computed<T>(() => this.#state()[key] as T)
  }
}