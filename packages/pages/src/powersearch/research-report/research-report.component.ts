import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

@Component({
  selector: 'ps-research-report',
  standalone: true,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  template: `
    <li-card>
      <li-header>Research Report</li-header>
      <li-content>
        <section>
          <ul>
            <li>
              <div>JP Morgan</div>
              <div>JP Morgan</div>
              <div>09-August-2022</div>
            </li>
            <li>
              <div>JP Morgan</div>
              <div>JP Morgan</div>
              <div>09-August-2022</div>
            </li>
          </ul>
        </section>
      </li-content>
      <li-footer></li-footer>
    </li-card>
  `,
  styleUrl: './research-report.component.scss'
})
export class PowersearchResearchReportComponent { }