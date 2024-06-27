import { Component } from '@angular/core'

@Component({
  selector: 'ps-launch-document',
  standalone: true,
  template: `
    <section>
      <div>
        <span>Market Update - Pass to pending item</span>
        <span>Market Update</span>
      </div>
      <div>
        <h1>Market Update - Pass to pending item</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>    
    </section>
  `,
  styleUrl: './document.component.scss'
})
export class PowersearchLaunchDocument {

}