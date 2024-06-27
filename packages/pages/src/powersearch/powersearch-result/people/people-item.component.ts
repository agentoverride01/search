import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

@Component({
  selector: 'ps-launch-people-item',
  standalone: true,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  template: `
    <section class="people-item">
      <li-avatar 
        src="https://2019.ng-my.org/assets/imgs/speakers/arjay-elbore.webp" 
        alt="1"></li-avatar>
        <div>
          <span>Arjay Elbore</span>
          <span class="people-item--position">
            Software Developer
          </span>
        </div>
    </section>
  `,
  styles: /* scss */`
    :host {
      .people-item {
        display: grid;
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

}