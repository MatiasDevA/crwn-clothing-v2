import { createContext, useState } from "react"

export const CartContext = createContext({})

export const CartsProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)

    const value = {isCartOpen, setIsCartOpen}


    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}