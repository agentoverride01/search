import type { Person } from '@lithium/pages/types'

import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core'
import { PeopleService } from './people.service'

@Component({
  selector: 'ps-people',
  standalone: true,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ PeopleService ],
  template: `
    <li-card class="ps-people">
      <li-header>People</li-header>
      <li-content>
        <section class="ps-people--content">
          @for (p of people(); track p.id) {
            <section>
              <li-avatar [src]="p.src" [alt]="p.id"></li-avatar>
              <div>
                <span>{{p.name}}</span>
                <span class="ps-people--position">{{p.position}}</span>
              </div>
            </section>
          }
        </section>
      </li-content>
      <li-footer></li-footer>
    </li-card>  
  `,
  styleUrl: './people.component.scss'
})
export class PowerSearchPeopleComponent { 
  #state = inject(PeopleService)

  people = this.#state.select<Person[]>('people')
}