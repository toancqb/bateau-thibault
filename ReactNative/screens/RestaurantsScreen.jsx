import { Text, View, FlatList, StyleSheet } from "react-native"
import React from 'react'
import { Background, MainLayout } from "../components/templates"
import deLaBriseIcon from '../assets/images/deLaBrise_icon.png'
import saphirIcon from '../assets/images/saphir_icon.png'
import gastMicherIcon from '../assets/images/gastMicher_icon.png'
import aquilonIcon from '../assets/images/aquilon_icon.png'
import ShipIcon from '../assets/images/ancre.png'

const buttons = [
    {
        title: 'Bistrot des Gaçons',
        onPress: (props) => props.navigation.navigate('Bateaux')
    },
    {
        title: 'Les fous de l\'île',
        onPress: (props) => props.navigation.navigate('Restaurants')
    },
    {
        title: 'Bistrot Landais',
        onPress: (props) => props.navigation.navigate('Recette')
    },
    {
        title: 'Ville 9-Trois',
        onPress: (props) => props.navigation.navigate('Contact')
    },
    {
        title: 'Bistrot le Sommelier',
        onPress: (props) => props.navigation.navigate('Contact')
    },
    {
        title: 'Devenez partenaire!',
        onPress: (props) => props.navigation.navigate('Contact')
    }
]

export default function ProductsAndPromotions() {
    return (
        <Background>
            <MainLayout 
            header={'Restaurants partenaires'}
            descriptions={['Tous les restaurants partenaires avec le bateau Thibault']} 
            buttons={buttons}
            />
        </Background>

    )
}


