import { Component } from '@angular/core'

@Component({
  selector: 'ps-page-item',
  standalone: true,
  template: `
    <section class="ps--page-item">
      <div>
        <div>
          <span>Initiative</span>
          <span></span>
        </div> 
        <div>Sustanable Banking Solutions Group</div>
      </div>
      <div>ESG (Environment, Social Governance) Advisory & Financing</div>
    </section>  
  `,
  styleUrl: './page-item.component.scss'
})
export class PowerSearchPageItemComponent { }