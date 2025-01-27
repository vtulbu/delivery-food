export interface PartnerInfo {
  name: string
  time_of_delivery: number
  stars: number
  price: number
  kitchen: string
  image: string
  products: string
}

export interface FoodItem {
  id: string
  name: string
  description: string
  price: number
  image: string
}

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export interface SearchItem {
  name: string
  keys: string[]
}
