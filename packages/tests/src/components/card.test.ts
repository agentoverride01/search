
import { TestBed } from '@angular/core/testing'
import { CardModule, CardComponent } from '@lithium/components/card' 

describe('Card', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CardModule ],
    }).compileComponents()
  })

  it('should create card component', () => {
    const fixture = TestBed.createComponent(CardComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

})