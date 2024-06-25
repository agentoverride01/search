import { Component, input } from '@angular/core'
import { NgStyle } from '@angular/common'

@Component({
  selector: 'legend-dot',
  standalone: true,
  template: `
    <div class="dot" 
      [ngStyle]="{ 
        background: bgColor() 
      }">
    </div>
  `,
  styles: /* scss */`
    :host {
      display: var(--legend-dot-display);
      align-content: center;
      justify-content: center;

      .dot {
        height: 13px;
        width: 13px;
        border: 1px solid;
        border-radius: 50%;
        display: inline-block;
      }
    }
  `,
  imports: [ NgStyle ]
})
export class MyDealLegendDotComponent {

  bgColor = input<string>()

}