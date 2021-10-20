import { Text, View, FlatList, StyleSheet, } from "react-native"
import React, { useContext, useEffect } from 'react'
import { Background } from "../components/templates"
import { Button, CartItem, } from "../components/atoms"
import PoupleIcon from '../assets/images/poulpe@3x.png'
import { CartContext } from '../context/cart';
import { useState } from "react/cjs/react.development"

export default function CartScreen() {
    const { products } = useContext(CartContext)

    const [total, setTotal] = useState(0)

    const calculateTotal = () => {
        let total = 0
        products.forEach(p => {
            total += p.price * p.quantity
        });
        return total
    }

    useEffect(() => {
        setTotal(calculateTotal())
    }, [products])

    return (
        <Background>
            <Text style={styles.textBlack}>Modifier la quantité en tappant sur chaque produit</Text>
            <View style={styles.container}>
                <FlatList
                    data={products}
                    renderItem={({ item }) => <View key={item.id} style={styles.listItem}>
                        <CartItem iconSrc={PoupleIcon} item={item} /></View>}
                />
            </View>
            <View style={styles.cartReview}>
                <Text style={styles.textTotal}>Total: {total} €</Text>
                <Text style={styles.text}>
                    Lieu de livraison (choisi):
                    { }
                    {"\n"}
                    26 avenue de Tourville, 75007 Paris
                    {"\n"}
                    Date de livraison:
                    {"\n"}
                    Samedi 16 Mars, à partir de 9h
                </Text>
                <Button minHeight={32} width={16} style={styles.button} title="Valider" />
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    textBlack: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        marginTop: 16,
        fontStyle: 'italic'
    },
    textTotal: {
        fontSize: 24,
        marginTop: 16,
        color: 'white',
        paddingHorizontal: 8,
        textAlign: 'right'
    },
    text: {
        fontSize: 18,
        marginTop: 16,
        color: 'white',
        paddingHorizontal: 8,
    },
    button: {
        width: 32,
        height: 16
    },
    cartReview: {
        borderColor: 'black',
        backgroundColor: 'rgba(0,0,0,0.3)',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
        paddingBottom: 8,
        fontSize: 18
    }
})



