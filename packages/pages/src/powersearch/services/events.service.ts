import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/internal/Subject'

@Injectable()
export class PowersearchEventService {

  toggleParent = new Subject<string>()
  toggleSection = new Subject<string>()

}