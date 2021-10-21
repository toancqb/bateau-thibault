import React from 'react';
import CartContextProvider from './context/cart';
import Routes from './Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
    return (
        <CartContextProvider value={[]}>
            <Routes />
        </CartContextProvider>
    );
}