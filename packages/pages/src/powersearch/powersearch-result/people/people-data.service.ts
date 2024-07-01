import { Injectable, signal } from '@angular/core'

import { PowersearchLaunchDataService } from '../data.service'
import { PeopleData, Person } from './types'

@Injectable()
export class PowersearchLauncPeopleService 
  extends PowersearchLaunchDataService<PeopleData> {

  protected createData() {
    const people: Person[] = [
      {
        id: 1,
        name: 'Arjay Elbore',
        position: 'Software Developer',
        avatar: {
          src: 'https://2019.ng-my.org/assets/imgs/speakers/arjay-elbore.webp'
        }
      },
      {
        id: 2,
        name: 'Arjay Elbore',
        position: 'Software Developer',
        avatar: {
          src: 'https://2019.ng-my.org/assets/imgs/speakers/arjay-elbore.webp'
        }
      },
      {
        id: 3,
        name: 'Arjay Elbore',
        position: 'Software Developer',
        avatar: {
          src: 'https://2019.ng-my.org/assets/imgs/speakers/arjay-elbore.webp'
        }
      },
      {
        id: 4,
        name: 'Arjay Elbore',
        position: 'Software Developer',
        avatar: {
          src: 'https://2019.ng-my.org/assets/imgs/speakers/arjay-elbore.webp'
        }
      },
      {
        id: 5,
        name: 'Arjay Elbore',
        position: 'Software Developer',
        avatar: {
          src: 'https://2019.ng-my.org/assets/imgs/speakers/arjay-elbore.webp'
        }
      },
      {
        id: 6,
        name: 'Arjay Elbore',
        position: 'Software Developer',
        avatar: {
          src: 'https://2019.ng-my.org/assets/imgs/speakers/arjay-elbore.webp'
        }
      }
    ]
    return signal<PeopleData>({
      people
    })
  }
}