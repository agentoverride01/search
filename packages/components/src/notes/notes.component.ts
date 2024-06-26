import { Component, HostBinding, Input } from '@angular/core'
import { NotesType } from './types'

@Component({
  selector: 'notes',
  standalone: true,
  template:  `
    <section class="notes">
      <div class="notes--content">
        <ng-content></ng-content>
      </div>
      <button class="notes--button">&times;</button>
    </section>
  `,
  styleUrl: './notes.component.scss'
})
export class NotesComponent {

  @HostBinding('attr.type') @Input() type: NotesType = 'info'  

}