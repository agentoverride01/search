import type { MydealLegend } from '@lithium/pages/types'

import { Component, input } from '@angular/core'
import { MyDealLegendDotComponent } from './mydeal-legend-dot.component'

@Component({
  selector: 'mydeal-legend',
  standalone: true,
  template: `
    <ul>
      @for (legend of value(); track legend.text) {
        <li>
          <legend-dot [bgColor]="legend.bgColor"></legend-dot>
          <div>{{legend.text}}</div>    
        </li>
      }
    </ul>
  `,
  styles: /* scss */`
    :host {
      ul {
        list-style: none;
        display: grid;
        grid-template-columns: auto auto auto 1fr;
        column-gap: 10px;
        justify-self: center;
        padding: 0;
        margin: 0;

        li {
          display: grid;
          grid-template-columns: auto 1fr;
          column-gap: 5px;
          align-items: center
        }
      }
    }
  `,
  imports: [ MyDealLegendDotComponent ]
})
export class MyDealLegendComponent {

  value = input<MydealLegend[]>([])

}