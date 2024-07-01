import { Injectable, signal } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { of } from 'rxjs'

import { PowersearchLaunchDataService } from '../data.service'
import { PageItem, PagesData } from './types'

@Injectable()
export class PowersearchLaunchPagesService 
  extends PowersearchLaunchDataService<PagesData> {

  protected createData() {
    const response = toSignal(
      of<PageItem[]>([
        {
          id: 1, 
          header: 'Best Efforts High Yield Bond -1. (AMRS)',
          tag: 'LevFin',
          description: 'Pre-Execution > Engage Internal Teams > Internal Approval Process'
        },
        {
          id: 2, 
          header: 'Best Efforts High Yield Bond -1. (Clone) 123 (ARMS)',
          tag: 'M&A',
          description: 'Pre-Execution > Engage Internal Teams > Internal Approval Process'
        },
        {
          id: 1, 
          header: 'eForms APR',
          tag: 'Quick Link',
          description: 'Resources > Others Links'
        }
      ])
    )
    return signal<PagesData>({
      pages: response()
    })
  }
}