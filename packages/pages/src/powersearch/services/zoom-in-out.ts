import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class ZoomInOutService {

  toogle: boolean = false

  get #rootElement() {
    return document.documentElement
  }

  zoomIn() {
    this.toogle = false
    this.#rootElement.removeAttribute('active')
    
  }

  zoomOut(name: string) {
    this.toogle = true
    this.#rootElement.setAttribute('active', name)
  }

}