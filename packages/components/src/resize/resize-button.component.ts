import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core'

@Component({
  selector: 'resize-button',
  standalone: true,
  template: `
    <button class="resize-button" (click)="onToggle.emit()" #button>
      <svg 
        class="resize-button--expand" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 242.133 242.133" 
        xml:space="preserve" 
        transform="scale(-1 1)">
        <path d="m89.247 131.673-47.732 47.73-15.909-15.91A15 15 0 0 0 0 174.1v53.032c0 8.284 6.716 15 15 15l53.033.001a.06.06 0 0 1 .019 0c8.285 0 15-6.716 15-15 0-4.377-1.875-8.316-4.865-11.059l-15.458-15.458 47.73-47.729c5.858-5.858 5.858-15.355 0-21.213-5.856-5.859-15.355-5.858-21.212-.001zM227.133 0H174.1a15 15 0 0 0-10.606 25.607l15.911 15.911-47.729 47.73c-5.858 5.858-5.858 15.355 0 21.213a14.953 14.953 0 0 0 10.606 4.393c3.839 0 7.678-1.464 10.606-4.394l47.73-47.73 15.909 15.91a14.994 14.994 0 0 0 16.346 3.252 15.001 15.001 0 0 0 9.26-13.858V15c0-8.284-6.716-15-15-15z"/>
      </svg>
      <svg
        class="resize-button--collapse" 
        viewBox="0 0 32 32" 
        xmlns="http://www.w3.org/2000/svg" 
        transform="scale(-1 1)">
        <path 
          d="M25.784 9.18 32 3l-3-3-6.174 6.2-2.218-2.23c-.479-.49-.966-1-1.546-1a1.05 1.05 0 0 0-1.05 1.06l.011 8.82c.001.31.141.59.354.78.193.21.465.36.774.36l8.77.01c.58 0 1.051-.47 1.05-1.06-.001-.58-.679-1.24-.969-1.53l-2.218-2.23zm-12.155 9.18c-.19-.21-.456-.35-.761-.35L4.244 18c-.57 0-1.032.46-1.032 1.03.001.57.667 1.22.953 1.5l2.181 2.18L0 29l3 3 6.254-6.38 2.181 2.18c.471.47.951.98 1.521.98.571 0 1.033-.46 1.032-1.03l-.011-8.63c0-.3-.138-.57-.348-.76z" />
      </svg>
    </button>
  `,
  styleUrl: './resize-button.component.scss'
})
export class ResizeButtonComponent  { 
  @Output() onToggle = new EventEmitter()
  @ViewChild('button') button!: ElementRef<HTMLButtonElement>

  @Input() set expanded(value: boolean) {
    const el = this.button.nativeElement
    value ? el.classList.add('expanded'): el.classList.remove('expanded')
  }
}