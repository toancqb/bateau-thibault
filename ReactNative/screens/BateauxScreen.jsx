import { Text, View, FlatList, StyleSheet } from "react-native"
import React from 'react'
import { Background, MainLayout } from "../components/templates"


const buttons = [
    {
        icon: ShipIcon,
        title: 'Bateaux',
        onPress: (props) => props.navigation.navigate('Bateaux')
    },
    {
        icon: RestaurantIcon,
        title: 'Restaurants',
        onPress: (props) => props.navigation.navigate('Restaurants')
    },
    {
        icon: RecipeIcon,
        title: 'Recette',
        onPress: (props) => props.navigation.navigate('Recette')
    },
    {
        icon: ContactIcon,
        title: 'Contact',
        onPress: (props) => props.navigation.navigate('Contact')
    }
]

export default function ProductsAndPromotions() {
    return (
        <Background>
            <MainLayout 
            header={'Les bateaux partenaires'}
            descriptions={['Tous les restaurants partenaires avec le bateau Thibault']} 
            buttons={buttons}
            />
        </Background>

    )
}


