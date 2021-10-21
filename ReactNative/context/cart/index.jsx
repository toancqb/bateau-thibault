import { createContext, useEffect, useState } from "react";
import React from 'react'
import { storeCartToAsyncStorage, retrieveCartFromLocalStorage } from "../../utils/asyncStorage";

const INITIAL_STATE = []

export const CartContext = createContext(INITIAL_STATE)

const CartContextProvider = ({children}) => {

    const [products, setProducts] = useState([])

    
    useEffect(() => {
        const retrieveCartFromLocalStorageLocal = async () => {
            setProducts(await retrieveCartFromLocalStorage())
        }
        retrieveCartFromLocalStorageLocal()
    }, [])
    
    const addProductToCart = async (product) => {
        if(products.find(p => p.id === product.id)){
            return
        }
        await setProducts(prev => [...prev, {
            ...product,
            quantity: 1
        }])
        await storeCartToAsyncStorage([...products, {
            ...product,
            quantity: 1
        }])
    }

    const addProduct = async (product, quantity) => {
        let newProducts = products.map(p => {
            if(p.id === product.id){
                if(quantity <= 0){
                    quantity = 0
                }
                if(quantity === 0){
                    return null
                }
                p.quantity = quantity
            }
            return p
        })
        newProducts = newProducts.filter(p => p !== null)
        await setProducts(newProducts)
        await storeCartToAsyncStorage(newProducts)
    }

    const value = {
        products,
        setProducts,
        addProductToCart,
        addProduct
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider