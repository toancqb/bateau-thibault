import { createContext, useState } from "react";
import { dataPathHelper } from "../../utils/pathUtils";
import React from 'react'

const INITIAL_STATE = []

export const CartContext = createContext(INITIAL_STATE)

const CartContextProvider = ({children}) => {

    const [products, setProducts] = useState([])

    const addProductToCart = (product) => {
        if(products.find(p => p.id === product.id)){
            return
        }
        setProducts(prev => [...prev, {
            ...product,
            quantity: 1
        }])
    }

    const addProduct = (product, quantity) => {
        const newProducts = products.map(p => {
            if(p.id === product.id){
                p.quantity = quantity
            }
            return p
        })
        setProducts(newProducts)
    }

    const value = {
        products,
        setProducts,
        addProductToCart
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider