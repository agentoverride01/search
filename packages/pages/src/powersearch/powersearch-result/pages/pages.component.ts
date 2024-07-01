import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core'

import { PowersearchLaunchPage } from './page.component'
import { PowersearchLaunchPagesService } from './pages-data.service'

import { PageItem } from './types'

@Component({
  selector: 'ps-launch-pages',
  standalone: true,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [ PowersearchLaunchPage ],
  providers: [ PowersearchLaunchPagesService ],
  template: `
    <article class="ps-launch-section">
      <li-header>
        <span>Pages</span>
      </li-header>
      <li-content>
        <section>
          @for (page of pages(); track page.id) {
            <ps-launch-page [value]="page" />
          }
        </section>
      </li-content>
    </article>
  `,
  styles: `
    :host {
      display: var(--ps-launch-host-section-display);
    }

    .ps-launch-section li-content > section {
      
    }
  `
})
export class PowersearchLaunchPages {
  #service = inject(PowersearchLaunchPagesService)

  pages = this.#service.select<PageItem[]>('pages')
}