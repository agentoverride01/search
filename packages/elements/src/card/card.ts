import { CustomElement, html } from '@lithium/elements/core'

import './card.scss'

export class CardElement extends CustomElement {

  override render() {
    return html `
      <section part="card">
        <slot></slot>
      </section>
    `
  }
}

if (!customElements.get('li-card')) {
  customElements.define('li-card', CardElement)
}