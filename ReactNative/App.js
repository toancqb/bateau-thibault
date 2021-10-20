import React from 'react';
import CartContextProvider from './context/cart';
import Routes from './Routes';

export default function App() {
    return (
        <CartContextProvider value={[]}>
            <Routes />
        </CartContextProvider>
    );
}