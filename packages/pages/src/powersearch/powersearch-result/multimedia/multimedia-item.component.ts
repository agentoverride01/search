import { Component } from '@angular/core'

@Component({
  selector: 'ps-launch-multimedia-item',
  standalone: true,
  template: `
    <section>
      <div></div>
      <div>
        <span>CIIG Merger</span>
        <span></span>
        <span></span>
      </div>
    </section>
  `,
  styles: /* scss */`
    :host {
      section {
        display: var(--ps-launch-multimedia-item-display, grid);
        grid-template-rows: 1fr 30px;
        height: 200px;
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 10px;
        row-gap: 10px;

        div:first-child {
          border: 1px solid;
          border-radius: 10px;        
        }

        div:last-child {
          display: grid;
          grid-template-columns: 1fr 10px 10px;
        }
      }
    }
  `
})
export class PowersearchLaunchMultimediaItem { }