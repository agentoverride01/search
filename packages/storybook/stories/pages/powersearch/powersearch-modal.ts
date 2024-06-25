import { Component, ViewChild } from '@angular/core'

import { ModalComponent } from '@lithium/components/modal'
import { SearchInputComponent } from '@lithium/components/search-input'

import { HomePage } from './powersearch-home'

@Component({
  selector: 'powersearch-modal',
  standalone: true,
  imports: [ ModalComponent, SearchInputComponent, HomePage ],
  template: `
    <article>
      <modal #modal>
        <header></header>
        <section>
          <p>To maximize your results, you can use the following search tokens.</p>
          <table>
            <thead>
              <tr>
                <td>Token</td>
                <td>Example</td>
                <td>Usage</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>doc:term</td>
                <td>doc:coca-cola</td>
                <td>Search only documents containing the specified term.</td>
              </tr>
              <tr>
                <td>Quotes ("")</td>
                <td>"coca-cola"</td>
                <td>Search items the exactly match the specified term</td>                
              </tr>
              <tr>
                <td>wildcards (*)</td>
                <td>Heath*</td>
                <td>Matches any character. (eg. "HealthCare" and "Healthy")</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3">**** other examples depending on busines needs ****</td>
              </tr>
              <tr>
                <td colspan="3">**** other examples depending on busines needs ****</td>
              </tr>
            </tfoot>
          </table>
        </section>
      </modal>
      <home-page>
        <search-input (onFocus)="onFocus()"></search-input>
      </home-page>
    </article>
  `,
  styleUrl: './powersearch-modal.scss'
})
export class PowerSearchModal { 

  @ViewChild('modal') modal!: ModalComponent

  onFocus() {
    const element = this.modal
    element.onModalOpen()
  }
}