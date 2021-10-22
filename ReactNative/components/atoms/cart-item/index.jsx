import React, { useContext, useState } from 'react';
import { Text, StyleSheet, Image, View, TouchableOpacity, TextInput } from 'react-native';
import { CartContext } from '../../../context/cart';

export default function CartItem(props) {
    const { item } = props;
    const [clicked, setClicked] = useState(false)
    const { addProduct } = useContext(CartContext)
    const [quantity, setQuantity] = useState(props.item.quantity)


    const onButtonMinusPlusQuantityPressed = async (quantity) => {
        try{
            if(quantity){
                setQuantity(parseInt(quantity))
            }
            await addProduct(item, quantity)
        }
        catch(e){
            console.log(e)
        }
    }

    const onQuantityInputModified = (quantity) => {
        if(quantity){
            setQuantity(parseInt(quantity))
        }
        else{
            setQuantity('')   
        }
    }

    const onQuantityModifiedConfirmed = async () => {
        await addProduct(item, quantity)
    }

    return (
        <>
            <View style={styles.button}>
                <View style={styles.leftPart}>
                    {props.iconSrc && (<Image style={styles.tinyLogo} source={props.iconSrc} />)}
                    <Text style={styles.text}>{item.name}</Text>
                </View>
                <View style={styles.rightPart}>
                    <TouchableOpacity style={styles.quantityButton} onPress={() => onButtonMinusPlusQuantityPressed(item.quantity-1)}><Text style={styles.text}>-</Text></TouchableOpacity>
                    <TextInput style={styles.textQuantity} value={quantity} onSubmitEditing={onQuantityModifiedConfirmed} onChange={(e) => onQuantityInputModified(e.target.value)}></TextInput>
                    <TouchableOpacity style={styles.quantityButton} onPress={() => onButtonMinusPlusQuantityPressed(item.quantity + 1)}><Text style={styles.text}>+</Text></TouchableOpacity>
                    <Text style={styles.text}>{`x ${item.price} €: `}</Text>
                    <Text style={styles.text}>{item.price * item.quantity} €</Text>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 8,
        elevation: 3,
        zIndex: 1,
        backgroundColor: 'rgba(0,0,0, 0.4)',
        minHeight: 48,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    leftPart: {
        display: 'flex',
        flexDirection: 'row',
    },
    rightPart: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.25,
        marginRight: 0,
        color: 'white',
    },
    textQuantity: {
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.25,
        marginRight: 0,
        color: 'white',
        marginLeft: 8,
        marginRight: 8,
        width: 16
    },
    tinyLogo: {
        width: 24,
        height: 24,
        marginRight: '1rem'
    },
    quantityButton: {
        height: 32,
        width: 32,
        color: 'white',
        fontSize: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    }
});