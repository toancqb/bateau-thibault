import { Text, View, FlatList, StyleSheet } from "react-native"
import React from 'react'
import { Background, MainLayout } from "../components/templates"
import bistrotDesGascons from '../assets/images/desGascons.png'
import lesFousDeLile from '../assets/images/fousDeLile.png'
import bistrotLandais from '../assets/images/bistrotLandais.png'
import villa9Trois from '../assets/images/villa9Trois.png'
import duSommelier from '../assets/images/duSommelier.png'
import tig from '../assets/images/TIG.png'

const buttons = [
    {
        title: 'Bistrot des Gasçons',
        onPress: (props) => props.navigation.navigate('Detail', {
            img: bistrotDesGascons,
            header: 'Bistrot des Gasçons',
            subHeader: 'XXX YYY ZZZ',
            fullWidth: true
        })
    },
    {
        title: 'Les fous de l\'île',
        onPress: (props) => props.navigation.navigate('Detail', {
            img: lesFousDeLile,
            header: 'Les fous de l\'île',
            subHeader: 'XXX YYY ZZZ',
            fullWidth: true
        })
    },
    {
        title: 'Bistrot Landais',
        onPress: (props) => props.navigation.navigate('Detail', {
            img: bistrotLandais,
            header: 'Bistrot Landais',
            subHeader: 'XXX YYY ZZZ',
            fullWidth: true
        })
    },
    {
        title: 'Ville 9-Trois',
        onPress: (props) => props.navigation.navigate('Detail', {
            img: villa9Trois,
            header: 'Ville 9-Trois',
            subHeader: 'XXX YYY ZZZ',
            fullWidth: true
        })
    },
    {
        title: 'Bistrot le Sommelier',
        onPress: (props) => props.navigation.navigate('Detail', {
            img: duSommelier,
            header: 'Bistrot le Sommelier',
            subHeader: 'XXX YYY ZZZ',
            fullWidth: true
        })
    },
    {
        title: 'Devenez partenaire!',
        onPress: (props) => props.navigation.navigate('Detail', {
            img: tig,
            header: 'Le Bateaux de Thibault',
            subHeader: '06.63.99.99.78\nlebateaudethibault@gmail.com\nwww.facebook.com/lebateaudethibault\n'
        })
    }
]

export default function ProductsAndPromotions(props) {
    return (
        <Background>
            <MainLayout
                header={'Restaurants partenaires'}
                descriptions={['Tous les restaurants partenaires avec le bateau Thibault']}
                buttons={buttons}
                navigationProps={props}
            />
        </Background>

    )
}


