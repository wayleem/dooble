import { writable, get } from 'svelte/store'

export const cartItems = writable<CartItem[]>([])

export function addToCart(sku: string) {
  let items = get(cartItems)
  let itemPosition = items.findIndex((item) => { return item.sku == sku })

  if (itemPosition !== -1) {
    cartItems.update(() => {
      let updatedItems = items.map((item) => {
        // if already in cart
        if (item.sku === sku) {
          return { ...item, quantity: item.quantity + 1 } //increment
        }
        return item
      })
      return updatedItems
    })
  } else {
    // add new item
    cartItems.update(() => {
      return [...items, { sku: sku, quantity: 1 }]
    })
  }
}

export function removeFromCart(sku: string) {
  let items = get(cartItems)
  let itemPosition = items.findIndex((item) => { return item.sku == sku })

  if (items[itemPosition]?.quantity - 1 === 0) {
    items.splice(itemPosition, 1)
  } else {
    cartItems.update(() => {
      let updatedItems = items.map((item) => {
        if (item.sku === sku) {
          return { ...item, quantity: item.quantity - 1 } //decrement
        }
        return item
      })
      return updatedItems
    })
  }

}
