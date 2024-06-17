import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

import { PowerSearchMultimediaItemComponent } from './multimedia-item.component'

@Component({
  selector: 'ps-multimedia',
  standalone: true,
  template: `
    <li-card>
      <li-header>Videos and Multimedia</li-header>
      <li-content>
        <section class="ps-multimedia-content">
          <ps-multimedia-item></ps-multimedia-item>
          <ps-multimedia-item></ps-multimedia-item>
          <ps-multimedia-item></ps-multimedia-item>
          <ps-multimedia-item></ps-multimedia-item>
        </section>
      </li-content>
      <li-footer></li-footer>
    </li-card>
  `,
  styleUrl: './multimedia.component.scss',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [ 
    PowerSearchMultimediaItemComponent 
  ]
})
export class PowerSearchMultimediaComponent { }