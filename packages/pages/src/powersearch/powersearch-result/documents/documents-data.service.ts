import { Injectable, signal } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'

import { of } from 'rxjs'

import { PowersearchLaunchDataService } from '../data.service'
import { DocumentData, DocumentItem } from './types'

@Injectable()
export class PowersearchLaunchDocumentsService 
  extends PowersearchLaunchDataService<DocumentData> {

  protected createData() {
    const respose = toSignal(
      of<DocumentItem[]>([
        { id: 1, name: 'Hello (Afrikaans)', tag: 'Template' },
        { id: 2, name: 'Genki Forest Overview & Coca Cola', tag: 'Profile' },
        { id: 3, name: 'Coca Cola Sustainability Linked Senior Unsecured Notes Offering', tag: 'Case Study' },
        { id: 4, name: 'Coca Cola FEMSA Senior Unsecured Green Notes Offering', tag: 'Case Study' },
        { id: 5, name: 'Check Pending Item', tag: 'Market Update' },
        { id: 6, name: 'Coca Cola FEMSA Senior Unsecured Offering', tag: 'Learning' }
      ])
    )
    return signal<DocumentData>({
      documents: respose()
    })
  }
}