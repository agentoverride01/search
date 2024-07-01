import { Component, Input } from '@angular/core'
import { NgClass } from '@angular/common'
import { PageItem } from './types'

@Component({
  selector: 'ps-launch-page',
  standalone: true,
  imports: [ NgClass ],
  template: `
    <section>
      <div>
        <h1 class="no-padding no-margin">
          {{value.header}}
        </h1>
        <span [ngClass]="[ 'tag', styleTag ]">
          {{value.tag}}
        </span>
      </div>
      <p class="no-padding no-margin">{{value.description}}</p>
    </section>
  `,
  styleUrl: './page.component.scss'
})
export class PowersearchLaunchPage { 
  @Input() value!: PageItem

  get styleTag() {
    return this.value.tag?.toLowerCase()
      ?.replaceAll(' ', '-')
      ?.replaceAll('/', '-')
      ?.replaceAll('&', '-')
  }
}