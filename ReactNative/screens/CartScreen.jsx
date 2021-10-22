import { Text, View, FlatList, StyleSheet, Alert } from "react-native"
import React, { useCallback, useContext, useEffect } from 'react'
import { Background } from "../components/templates"
import { Button, CartItem, } from "../components/atoms"
import PoupleIcon from '../assets/icons/poulpe.png'
import { CartContext } from '../context/cart';
import { useState } from "react/cjs/react.development"
import DropDownPicker from 'react-native-dropdown-picker';
import { pointsRelais } from "../api"
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function CartScreen() {
    const { products } = useContext(CartContext)

    const [total, setTotal] = useState(0)

    const [relayPointPickerOpen, setRelayPointPickerOpen] = useState(false);
    const [pointsRelaisValue, setPointRelaisValue] = useState(null);

    const [items, setItems] = useState(pointsRelais);

    const [date, setDate] = useState(new Date())
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);


    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        setDate(date)
        hideDatePicker();
    };

    //TODO choose this or not, array size should be constant
    const calculateTotal = useCallback(() => {
        let total = 0
        products.forEach(p => {
            if (p.sale) {
                total += (p.price - p.discount) * p.quantity
            }
            else {
                total += p.price * p.quantity
            }
        });
        return total
    }, products)

    const createTwoButtonAlert = () =>
        Alert.alert(
            "Envoyer votre commande?",
            `Envoyer votre commande de ${calculateTotal()} à Thibault?`,
            [
                {
                    text: "Non",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Oui", onPress: () => alert("Commande envoyé") }
            ]
        );

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
                    {"\n"}
                    <DropDownPicker
                        style={styles.dropdown}
                        open={relayPointPickerOpen}
                        value={pointsRelaisValue}
                        items={items}
                        setOpen={setRelayPointPickerOpen}
                        setValue={setPointRelaisValue}
                        setItems={setItems}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                        containerStyle={{
                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                            paddingTop: 4,
                            paddingBottom: 4,
                            paddingLeft: 8,
                            paddingRight: 8,
                            borderRadius: 8
                        }}
                        textStyle={{
                            color: 'black',
                        }}
                    />
                    {"\n"}
                    {pointsRelaisValue ? pointsRelais.find(p => p.value === pointsRelaisValue).address : 'Veuillez vous choiser votre point de relais!'}
                    {"\n"}
                    Date de livraison:
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                    {"\n"}
                </Text>
                <Button minHeight={32} width={16} style={styles.buttonDate} title={'Samedi 16 Mars, à partir de 9h'} onPress={showDatePicker} />
                <Button minHeight={32} width={16} style={styles.button} title="Valider" onPress={createTwoButtonAlert} />
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
        fontSize: 18,
        zIndex: 1,
        elevation: 1
    },
})



