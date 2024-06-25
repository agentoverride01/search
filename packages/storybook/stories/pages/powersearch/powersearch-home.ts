import { Component } from '@angular/core'

@Component({
  selector: 'home-page',
  standalone: true,
  template: `
    <div class="main">
      <ng-content></ng-content>
      <div class="bg-image">
        <div class="content">
          <div class="welcome">
            <div></div>
            <div>
              <h1>Welcome to GCIB Launch</h1>
              <h3>
                Launch is new global knowlegde management platform
                an interactive resource hub for creating pitches, 
                executing deals and navigating to GCIB.
              </h3>
            </div>
          </div>
          <div class="navigation">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './powersearch-home.scss'
})
export class HomePage { }