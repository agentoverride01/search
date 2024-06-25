import { Component, input } from '@angular/core'

import { SearchInputComponent } from '@lithium/components/search-input'
import { PowersearchComponent } from '@lithium/pages/powersearch'
import { NotesComponent } from '@lithium/components/notes'

import { NotesType } from '@lithium/components/types'

@Component({
  selector: 'powersearch-notes',
  standalone: true,
  template: `
    <article class="notes--content">
      <search-input></search-input>
      <notes [type]="type()">
        <section>
          <span>
            Automate this search? Every
            <a href="">Day</a>
            <a href="">Week</a>
            <a href="">Custom</a>
          </span>
          <span>
            (shown only when user searches the same term 3 times a week)
          </span>
        </section>
      </notes>
      <gl-powersearch></gl-powersearch>
    </article>
  `,
  styles: /* scss */`
    :host {
      .notes {
        &--content {
          display: grid;
          row-gap: 20px;

          a {
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
  `,
  imports: [ 
    PowersearchComponent,
    SearchInputComponent, 
    NotesComponent 
  ]
})
export class PowerSearchNotes { 

  type = input<NotesType>('info')

}