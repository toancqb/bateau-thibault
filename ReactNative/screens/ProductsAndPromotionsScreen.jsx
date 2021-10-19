import { Text, View, FlatList, StyleSheet } from "react-native"
import React from 'react'
import { Background } from "../components/templates"
import { Button } from "../components/atoms"
import PoupleIcon from '../assets/images/poulpe@3x.png'

export default function ProductsAndPromotions() {
    return (
        <Background>
            <Text style={styles.text}>Choissisez vos produits</Text>
            <View style={styles.container}>
                <FlatList
                    data={[
                        { key: 'Poissons' },
                        { key: 'Coquillages' },
                        { key: 'Crustacés' },
                        { key: 'Promotions' },
                    ]}
                    renderItem={({ item }) => <View key={item.key} style={styles.listItem}>
                        <Button tinyLogoHeight={100} tinyLogoWidth={100} minHeight={128} iconSrc={PoupleIcon} title={item.key} /></View>}
                />
            </View>
        </Background>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 16
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 120,
        color: 'white'
    },
    listItem: {
        marginTop: 16,
        marginBottom: 16,
    }
})



