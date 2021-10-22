import React, { useContext, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import { CartContext } from '../../../context/cart';

export default function ListItem(props) {
    const { item } = props;
    const [clicked, setClicked] = useState(false)
    const { addProductToCart } = useContext(CartContext)


    const onPress = async () => {
        setClicked(true)
        await addProductToCart(item, 1)
    }

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <View style={styles.leftPart}>
                {props.iconSrc && (<Image style={styles.tinyLogo} source={props.iconSrc} />)}
                <Text style={styles.text}>{item.name}</Text>
            </View>
            <View style={styles.rightPart}>
                <Text style={styles.text}>{clicked > 0 ? 'OK' : ''}</Text>
                <Text style={styles.text}>{item.price} €</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 8,
        elevation: 3,
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
    },
    text: {
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.25,
        marginRight: 8,
        color: 'white',
    },
    tinyLogo: {
        width: 24,
        height: 24,
        marginRight: '1rem'
    },
});