import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef } from '@angular/core'

@Component({
  selector: 'ps-people',
  standalone: true,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  template: `
    <div #overlay class="overlay"></div>
    <li-card #card (click)="onZoomOut()">
      <li-header>People</li-header>
      <li-content>
        <section>
          
        </section>
      </li-content>
    </li-card>  
  `,
  styleUrl: './people.component.scss'
})
export class PowerSearchPeopleComponent { 
  @ViewChild('card') cardRef!: ElementRef
  @ViewChild('overlay') overlayRef!: ElementRef

  onZoomOut() {
    this.overlayRef.nativeElement.classList.toggle('active')
    this.cardRef.nativeElement.classList.toggle('zoom-in-out')
  }

}