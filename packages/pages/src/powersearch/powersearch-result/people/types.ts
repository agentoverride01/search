
export type Person = {
  id?: number
  name?: string
  position?: string
  avatar?: {
    src?: string
    alt?: string
  }
}

export type PeopleData = {
  people?: Person[]
}