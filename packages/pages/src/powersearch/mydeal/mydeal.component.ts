import { MydealLegend, MyDealValue } from '@lithium/pages/types'

import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core'

import { MyDealLegendComponent } from './mydeal-legend.component'
import { MyDealLegendDotComponent } from './mydeal-legend-dot.component'
import { MyDealService } from './mydeal.service'

@Component({
  selector: 'ps-mydeal',
  standalone: true,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  template: `
    <li-card>
      <li-header>
        <div>myDeal</div>
        <mydeal-legend [value]="legends()"></mydeal-legend>
      </li-header>
      <li-content>
        <section>
          <ul>
            @for(deal of deals(); track deal.dealDbId) {
              <li>
                <legend-dot></legend-dot>
                <div>{{deal.clientName}}</div>
                <div>
                  USD$ {{ deal.dealSize }}
                </div>
                <div>{{deal.pricingDate}}</div>
              </li>
            }           
          </ul>
        </section>
      </li-content>
      <li-footer></li-footer>
    </li-card>    
  `,
  styleUrl: './mydeal.component.scss',
  imports: [ MyDealLegendComponent, MyDealLegendDotComponent ],
  providers: [ MyDealService ]
})
export class PowerSearchMyDealComponent { 
  #state = inject(MyDealService)

  deals = this.#state.select<MyDealValue[]>('deals')

  legends = this.#state.select<MydealLegend[]>('legends')
}