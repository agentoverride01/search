export type DocumentItem = {
  id?: number
  name?: string
  tag?: string
  header?: string
  descripttion?: string
}

export type DocumentData = {
  documents?: DocumentItem[]
}

export type LimitConfig = {
  from?: number
  to?: number
}