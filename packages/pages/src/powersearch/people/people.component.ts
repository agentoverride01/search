import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

@Component({
  selector: 'ps-people',
  standalone: true,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  template: `
    <li-card>
      <li-header>People</li-header>
      <li-content>
        <section>
          
        </section>
      </li-content>
    </li-card>  
  `,
  styleUrl: './people.component.scss'
})
export class PowerSearchPeopleComponent { }