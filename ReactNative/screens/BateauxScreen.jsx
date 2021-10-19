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
        icon: deLaBriseIcon,
        title: 'De la Brise',
        onPress: (props) => props.navigation.navigate('Bateaux')
    },
    {
        icon: saphirIcon,
        title: 'Saphir',
        onPress: (props) => props.navigation.navigate('Restaurants')
    },
    {
        icon: gastMicherIcon,
        title: 'Gast Micher',
        onPress: (props) => props.navigation.navigate('Recette')
    },
    {
        icon: aquilonIcon,
        title: 'Aquilon',
        onPress: (props) => props.navigation.navigate('Contact')
    },
    {
        icon: ShipIcon,
        title: 'Contact',
        onPress: (props) => props.navigation.navigate('Contact')
    },
    {
        icon: ShipIcon,
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


