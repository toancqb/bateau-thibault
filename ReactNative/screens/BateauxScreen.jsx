import { Text, View, FlatList, StyleSheet } from "react-native"
import React from 'react'
import { Background, MainLayout } from "../components/templates"
import deLaBriseIcon from '../assets/images/deLaBrise_icon.png'
import saphirIcon from '../assets/images/saphir_icon.png'
import gastMicherIcon from '../assets/images/gastMicher_icon.png'
import aquilonIcon from '../assets/images/aquilon_icon.png'
import ShipIcon from '../assets/images/ancre.png'
import deLaBrise from '../assets/images/deLaBrise.png'
import saphir from '../assets/images/saphir.png'
import tig from '../assets/images/TIG.png'
import gastMicher from '../assets/images/gastMicher.png'
import aquilon from '../assets/images/aquilon.png'

const buttons = [
    {
        icon: deLaBriseIcon,
        title: 'De la Brise',
        onPress: (props) => props.navigation.navigate('Detail', {
            img: deLaBrise,
            header: 'De la Brise',
            subHeader: 'XXX YYY ZZZ'
        })
    },
    {
        icon: saphirIcon,
        title: 'Saphir',
        onPress: (props) => props.navigation.navigate('Detail', {
            img: saphir,
            header: 'Saphir',
            subHeader: 'XXX YYY ZZZ'
        })
    },
    {
        icon: gastMicherIcon,
        title: 'Gast Micher',
        onPress: (props) => props.navigation.navigate('Detail', {
            img: gastMicher,
            header: 'Gast Micher',
            subHeader: 'XXX YYY ZZZ'
        })
    },
    {
        icon: aquilonIcon,
        title: 'Aquilon',
        onPress: (props) => props.navigation.navigate('Detail', {
            img: aquilon,
            header: 'Aquilon',
            subHeader: 'XXX YYY ZZZ'
        })
    },
    {
        icon: ShipIcon,
        title: 'Contact',
        onPress: (props) => props.navigation.navigate('Detail', {
            img: tig,
            header: 'Le Bateaux de Thibault',
            subHeader: '06.63.99.99.78\nlebateaudethibault@gmail.com\nwww.facebook.com/lebateaudethibault\n'
        })
    },
    {
        icon: ShipIcon,
        title: 'Contact',
        onPress: (props) => props.navigation.navigate('Detail', {
            img: tig,
            header: 'Le Bateaux de Thibault',
            subHeader: '06.63.99.99.78\nlebateaudethibault@gmail.com\nwww.facebook.com/lebateaudethibault\n'
        })
    }
]

export default function BateauxScreen(props) {
    return (
        <Background>
            <MainLayout
                header={'Les bateaux partenaires'}
                descriptions={['Tous les eaux mènent le bateau Thibault']}
                buttons={buttons}
                navigationProps={props}
            />
        </Background>

    )
}


