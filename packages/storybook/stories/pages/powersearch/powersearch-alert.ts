import { Component, input } from '@angular/core'

import { SearchInputComponent } from '@lithium/components/search-input'
import { PowersearchComponent } from '@lithium/pages/powersearch'
import { AlertComponent } from '@lithium/components/alert'

import { AlertType } from '@lithium/components/types'

@Component({
  selector: 'powersearch-alert',
  standalone: true,
  imports: [ 
    PowersearchComponent,
    SearchInputComponent, 
    AlertComponent 
  ],
  template: `
    <article class="alert--content">
      <search-input></search-input>
      <alert [type]="type()">
        <section>
          <span>
            To many results found, try adding quotes
            <a href="">"what ever the current search term is."</a>
          </span>
          <span>
            (clicking the link would automatically re-run the search)
          </span>
        </section>
      </alert>
      <gl-powersearch></gl-powersearch>
    </article>
  `,
  styles: /* scss */`
    :host {
      .alert {
        &--content {
          display: grid;
          row-gap: 20px;

          a {
            color: #fff;
            font-size: 15px;
            font-weight: bolder;
          }

          section {
            display: grid;
            row-gap: 10px
          }
        }
      }
    }
  `
})
export class PowerSearchAlert { 

  type = input<AlertType>('info')

}