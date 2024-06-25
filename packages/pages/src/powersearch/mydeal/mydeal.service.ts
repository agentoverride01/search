import type { MyDeal } from '@lithium/pages/types'

import { Injectable, signal, computed } from '@angular/core'

@Injectable()
export class MyDealService {

  #state = signal<MyDeal>({
    deals: [
      { dealDbId: 1, clientName: 'Coca Cola', dealSize: '1.28', pricingDate: '09-Aug-2022' },
      { dealDbId: 2, clientName: 'Coca Cola', dealSize: '1.28', pricingDate: '09-Aug-2022' },
      { dealDbId: 3, clientName: 'Coca Cola', dealSize: '1.28', pricingDate: '09-Aug-2022' },
      { dealDbId: 4, clientName: 'Coca Cola', dealSize: '1.28', pricingDate: '09-Aug-2022' },
      { dealDbId: 5, clientName: 'Coca Cola', dealSize: '1.28', pricingDate: '09-Aug-2022' }
    ],
    legends: [
      { text: 'M&A' },
      { text: 'ECM' },
      { text: 'IG' },
      { text: 'LF' }
    ]
  })

  select<T>(key: keyof MyDeal) {
    return computed<T>(() => this.#state()[key] as T)
  }
}