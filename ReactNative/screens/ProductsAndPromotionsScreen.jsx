import { Text, View, FlatList, StyleSheet } from "react-native"
import React from 'react'
import { Background } from "../components/templates"
import { Button } from "../components/atoms"
import { ProductCategories } from "../api"

export default function ProductsAndPromotionsScreen({navigation}) {
    return (
        <Background>
            <Text style={styles.text}>Choissisez vos produits</Text>
            <View style={styles.container}>
                <FlatList
                    data={ProductCategories}
                    renderItem={({ item }) => <View key={item.name} style={styles.listItem}>
                        <Button onPress={() => navigation.navigate('ProductsList', {
                            productCategory: item.category
                        })} tinyLogoHeight={100} tinyLogoWidth={100} minHeight={128} iconSrc={item.icon} title={item.name} /></View>}
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
        fontWeight: '600',
        marginTop: 16,
        fontStyle: 'italic'
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



