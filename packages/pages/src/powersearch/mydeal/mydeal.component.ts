import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

@Component({
  selector: 'ps-mydeal',
  standalone: true,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  template: `
    <li-card>
      <li-header>myDeal</li-header>
      <li-content>
        <section>
          <ul>
            <li>
              <div></div>
              <div>Coca Cola</div>
              <div>US$ 1.28</div>
              <div>09-Aug-2022</div>
            </li>
            <li>
              <div></div>
              <div>Coca Cola</div>
              <div>US$ 1.28</div>
              <div>09-Aug-2022</div>
            </li>
            <li>
              <div></div>
              <div>Coca Cola</div>
              <div>US$ 1.28</div>
              <div>09-Aug-2022</div>
            </li>
            <li>
              <div></div>
              <div>Coca Cola</div>
              <div>US$ 1.28</div>
              <div>09-Aug-2022</div>
            </li>
            <li>
              <div></div>
              <div>Coca Cola</div>
              <div>US$ 1.28</div>
              <div>09-Aug-2022</div>
            </li>
            <li>
              <div></div>
              <div>Coca Cola</div>
              <div>US$ 1.28</div>
              <div>09-Aug-2022</div>
            </li> 
            <li>
              <div></div>
              <div>Coca Cola</div>
              <div>US$ 1.28</div>
              <div>09-Aug-2022</div>
            </li>               
          </ul>
        </section>
      </li-content>
      <li-footer></li-footer>
    </li-card>    
  `,
  styleUrl: './mydeal.component.scss'
})
export class PowerSearchMyDealComponent { }