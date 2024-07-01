import { Component, Input } from '@angular/core'
import { NgClass } from '@angular/common'

import { DocumentItem } from './types'

@Component({
  selector: 'ps-launch-document',
  standalone: true,
  imports: [ NgClass ],
  template: `
    <section>
      <div>
        <span>{{value.name}}</span>
        <span [ngClass]="[ 'tag', styleTag ]">{{value.tag}}</span>
      </div>
      <div>
        <h1 class="no-padding no-margin">
          {{value.header ?? value.name}}
        </h1>
        <p class="no-padding no-margin">
          {{
            value.descripttion ?? 
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
              "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when" +
              "an unknown printer took a galley of type and scrambled it to make a type specimen book"
          }}
        </p>
      </div>
    </section>
  `,
  styleUrl: './document.component.scss'
})
export class PowersearchLaunchDocument { 

  @Input() value!: DocumentItem 

  get styleTag() {
    return this.value.tag?.toLowerCase()
      ?.replaceAll(' ', '-')
      ?.replaceAll('/', '-')
  }
}