import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core'
import { Person } from './types'

@Component({
  selector: 'ps-launch-people-item',
  standalone: true,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  template: `
    <section class="people-item">
      <li-avatar [src]="value.avatar?.src" />
      <div>
        <span>{{value.name}}</span>
        <span class="people-item--position">
          {{value.position}}
        </span>
      </div>
    </section>
  `,
  styles: /* scss */`
    :host {
      .people-item {
        display: var(--ps-people-item-display, grid);
        border: 1px solid #cccccc;
        border-radius: 8px;
        padding: 8px;
        row-gap: 5px;
        justify-items: center;
        height: 150px;

        li-avatar {
          --avatar-width: 100px;
          --avatar-height: 100px;

          ::part(img) {
            width: var(--avatar-width);
            height: var(--avatar-width);
          }
        }

        &--position {
          display: none;
        }
      }
    }
  `
})
export class PowersearchLauncPeopleItem {
  
  @Input() value!: Person
}