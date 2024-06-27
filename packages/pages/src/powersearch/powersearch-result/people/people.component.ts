import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { PowersearchLauncPeopleItem } from './people-item.component'

@Component({
  selector: 'ps-launch-people',
  standalone: true,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [ PowersearchLauncPeopleItem ],
  template: `
    <article class="launch-people">
      <li-header>
        <span>People</span>
      </li-header>
      <li-content>
        <section class="launch-people--items">
          <ps-launch-people-item></ps-launch-people-item>
          <ps-launch-people-item></ps-launch-people-item>
          <ps-launch-people-item></ps-launch-people-item>
          <ps-launch-people-item></ps-launch-people-item>
          <ps-launch-people-item></ps-launch-people-item>
        </section>
      </li-content>
    </article>
  `,
  styleUrl: './people.component.scss'
})
export class PowersearchLaunchPeopleComponent { 

}