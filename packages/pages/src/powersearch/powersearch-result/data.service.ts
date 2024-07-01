import { WritableSignal, computed } from '@angular/core'

export abstract class PowersearchLaunchDataService<TData> {

  #state = this.createData()

  protected abstract createData(): WritableSignal<TData>

  select<T>(key: keyof TData) {
    return computed<T>(() => this.#state()[key] as T)
  }
}