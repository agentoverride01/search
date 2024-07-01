import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/internal/Subject'

@Injectable()
export class PowersearchLaunchToggleService {
  toggle = new Subject<string>()
  toggleParent = new Subject<string>()
}