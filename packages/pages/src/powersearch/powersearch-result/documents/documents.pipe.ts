import { Pipe, PipeTransform } from '@angular/core'
import { DocumentItem, LimitConfig } from './types'

@Pipe({
  name: 'limiTo',
  standalone: true
})
export class DocumentsLimitToPipe implements PipeTransform {
  transform(value: DocumentItem[], config?: LimitConfig) {
    const { from, to } = config ?? {}
    return value ? value?.slice(from, to ?? value.length): []
  }
}