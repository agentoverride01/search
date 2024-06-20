import { Component, HostBinding, Input } from '@angular/core'

export type AlertType =  
  'success' 
  | 'info'
  | 'warning'
  | 'danger'

@Component({
  selector: 'alert',
  standalone: true,
  template:  `
    <section class="alert">
      <div class="alert--content">
        <ng-content></ng-content>
      </div>
      <button class="alert--button">&times;</button>
    </section>
  `,
  styleUrl: './alert.component.scss'
})
export class AlertComponent {

  @HostBinding('attr.type') @Input() type: AlertType = 'info'

}