import { Component, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'ps-collapsable-button',
  standalone: true,
  template: `
    <section>
      <hr />
      <button (click)="onToggle.emit()">
        <ng-content></ng-content>
      </button>
      <hr />
    </section>
  `,
  styleUrl: './collapsable-button.scss'
})
export class CollapsableButton { 
  @Output() onToggle = new EventEmitter()
}