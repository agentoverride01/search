import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/internal/Subject'

@Injectable({
  providedIn: 'root'
})
export class PowerSearchService {
  #toggle = new Subject<string>()
  

  toggle = this.#toggle.asObservable() 

  emit(value: string) {
    this.#toggle.next(value)
  }
}