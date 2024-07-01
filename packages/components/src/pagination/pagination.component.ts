import { Component } from '@angular/core'

@Component({
  selector: 'pagination',
  standalone: true,
  template: `
    <div id="app" class="container">  
    <ul class="page">
        <li class="page__btn">
          <i class="gg-chevron-left"></i>
        </li>
        <li class="page__numbers"> 1</li>
        <li class="page__numbers active">2</li>
        <li class="page__numbers">3</li>
        <li class="page__numbers">4</li>
        <li class="page__numbers">5</li>
        <li class="page__numbers">6</li>
        <li class="page__dots">...</li>
        <li class="page__numbers"> 10</li>
        <li class="page__btn">
          <i class="gg-chevron-left gg-chevron-right"></i>
        </li>
      </ul>
    </div>  
  `,
  styleUrl: './pagination.component.scss'
})
export class Pagination { }