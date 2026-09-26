import { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({children}) {
  const [orderCount, setOrderCount] = useState(0)
  const [storeOrderId, setStoreOrderId] = useState([])

  return (
    <CartContext.Provider value={{ orderCount, storeOrderId, setStoreOrderId, setOrderCount }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}