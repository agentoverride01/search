import { CustomElement, html } from '@lithium/elements/core'

import './footer.scss'

export class FooterElement extends CustomElement {

  static elementName = 'li-footer'

  override render() {
    return html `
      <footer part="footer">
        <slot></slot>
      </footer>
    `
  }
}

if (!customElements.get(FooterElement.elementName)) {
  customElements.define(FooterElement.elementName, FooterElement)
}