import { CustomElement, html } from '@lithium/elements/core'

import './card.scss'

export class CardElement extends CustomElement {

  static $name = 'li-card'

  override render() {
    return html `
      <section part="card">
        <slot></slot>
      </section>
    `
  }
}

if (!customElements.get(CardElement.$name)) {
  customElements.define(CardElement.$name, CardElement)
}