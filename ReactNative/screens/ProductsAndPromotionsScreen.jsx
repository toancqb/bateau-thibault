import { Text, View, FlatList, StyleSheet } from "react-native"
import React from 'react'
import { Background } from "../components/templates"

export default function ProductsAndPromotions() {
    return (
        <Background>
            <Text>Choissisez vos produits</Text>
            <View style={styles.container}>
                <FlatList
                    data={[
                        { key: 'Devin' },
                        { key: 'Dan' },
                        { key: 'Dominic' },
                        { key: 'Jackson' },
                        { key: 'James' },
                        { key: 'Joel' },
                        { key: 'John' },
                        { key: 'Jillian' },
                        { key: 'Jimmy' },
                        { key: 'Julie' },
                    ]}
                    renderItem={({ item }) => <View style={styles.listItem}><Text style={styles.item}>{item.key}</Text></View>}
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
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        color: 'white'
    },
    listItem: {
        backgroundColor: 'rgba(0,0,0,0.3)'
    }
})



