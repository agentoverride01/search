export type MydealLegend = {
  text?: string
  bgColor?: string
}

export type MyDealValue = {
  dealDbId?: number
  clientName?: string
  product?: string
  dealSize?: string
  pricingDate?: string
  currency?: string
}

export type MyDeal = {
  deals: MyDealValue[]
  legends: MydealLegend[]
}