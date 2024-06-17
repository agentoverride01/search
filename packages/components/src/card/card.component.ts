import { Component } from '@angular/core'

@Component({
  selector: 'ma-card',
  standalone: true,
  template: `
    <section class="ma-card">
      <ng-content></ng-content>
    </section>
  `,
  styleUrl: './card.component.scss'
})
export class CardComponent {}