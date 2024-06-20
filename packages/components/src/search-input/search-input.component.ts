import {  Component, EventEmitter, Input, Output }  from '@angular/core'

@Component({
  selector:  'search-input',
  standalone:  true,
  template:  `
    <label class="search">
      <div class="search--icon">
        <svg xmlns="http://www.w3.org/2000/svg" 
          x="0px" 
          y="0px"
          width="100" 
          height="100" 
          viewBox="0 0 50 50">
          <path d="M 21 3 C 11.622998 3 4 10.623005 4 20 C 4 29.376995 11.622998 37 21 37 C 24.712383 37 28.139151 35.791079 30.9375 33.765625 L 44.085938 46.914062 L 46.914062 44.085938 L 33.886719 31.058594 C 36.443536 28.083 38 24.223631 38 20 C 38 10.623005 30.377002 3 21 3 z M 21 5 C 29.296122 5 36 11.703883 36 20 C 36 28.296117 29.296122 35 21 35 C 12.703878 35 6 28.296117 6 20 C 6 11.703883 12.703878 5 21 5 z"></path>
        </svg>        
      </div>
      <input 
        type="input" 
        class="search--input" 
        [placeholder]="placeholder ?? 'What are you looking for?'"
        (focus)="onInputFocus()"
      />
      <div class="search--button">
        <button class="search--button--clear">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
            <path d="M11 0.7H13V23.3H11z" transform="rotate(-45.001 12 12)"></path><path d="M0.7 11H23.3V13H0.7z" transform="rotate(-45.001 12 12)"></path>
          </svg>
        </button>
        <button class="search--button--search">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 26 26">
              <path d="M 10 0.1875 C 4.578125 0.1875 0.1875 4.578125 0.1875 10 C 0.1875 15.421875 4.578125 19.8125 10 19.8125 C 12.289063 19.8125 14.394531 19.003906 16.0625 17.6875 L 16.9375 18.5625 C 16.570313 19.253906 16.699219 20.136719 17.28125 20.71875 L 21.875 25.34375 C 22.589844 26.058594 23.753906 26.058594 24.46875 25.34375 L 25.34375 24.46875 C 26.058594 23.753906 26.058594 22.589844 25.34375 21.875 L 20.71875 17.28125 C 20.132813 16.695313 19.253906 16.59375 18.5625 16.96875 L 17.6875 16.09375 C 19.011719 14.421875 19.8125 12.300781 19.8125 10 C 19.8125 4.578125 15.421875 0.1875 10 0.1875 Z M 10 2 C 14.417969 2 18 5.582031 18 10 C 18 14.417969 14.417969 18 10 18 C 5.582031 18 2 14.417969 2 10 C 2 5.582031 5.582031 2 10 2 Z M 4.9375 7.46875 C 4.421875 8.304688 4.125 9.289063 4.125 10.34375 C 4.125 13.371094 6.566406 15.8125 9.59375 15.8125 C 10.761719 15.8125 11.859375 15.433594 12.75 14.8125 C 12.511719 14.839844 12.246094 14.84375 12 14.84375 C 8.085938 14.84375 4.9375 11.695313 4.9375 7.78125 C 4.9375 7.675781 4.933594 7.574219 4.9375 7.46875 Z"></path>
            </svg>
          </span>
          <span class="search-text">mySearch</span>
        </button>
      </div>
    </label>
  `,
  styleUrl: './search-input.component.scss'
})
export class SearchInputComponent { 

  @Output() onFocus = new EventEmitter()
  @Input() placeholder?: string

  onInputFocus() {
    this.onFocus.emit()
  }
}