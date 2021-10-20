import { Text, View, FlatList, StyleSheet } from "react-native"
import React from 'react'
import { Background } from "../components/templates"
import { ListItem } from "../components/atoms"
import PoupleIcon from '../assets/images/poulpe@3x.png'
import { Products } from "../api"

export default function ProductsListScreen({route, navigation}) {

    const {productCategory} = route.params

    const products = [...Products]

    const filteredProductsByCategory = products.filter(product => {
        if(productCategory === null){
            return product.sale === true
        }
        return product.category === parseInt(productCategory)
    })


    return (
        <Background>
            <Text style={styles.text}>Choissisez vos produits</Text>
            <View style={styles.container}>
                <FlatList
                    data={filteredProductsByCategory}
                    renderItem={({ item }) => <View key={item.id} style={styles.listItem}>
                        <ListItem iconSrc={PoupleIcon} item={item}/></View>}
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
        color: 'white'
    },
})



