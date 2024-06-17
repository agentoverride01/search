import '@lithium/elements/layout'
import '@lithium/elements/card'

import { Component } from '@angular/core'
import { PowersearchComponent } from '@lithium/pages/powersearch'

@Component({
  selector: 'powersearch',
  standalone: true,
  template: `
    <gl-powersearch></gl-powersearch>
  `,
  imports: [ PowersearchComponent ]
})
export class PowerSearch { }