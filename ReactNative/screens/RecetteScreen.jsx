import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/atoms';
import background from '../assets/images/background.png';
import HomardIcon from '../assets/images/homardRecette_icon.png'
import StJacquesIcon from '../assets/images/saintJacques_icon.png'
import BarIcon from '../assets/images/barRecette_icon.png'
import PoulpeIcon from '../assets/images/poulpe.png'

const SMALL_BUTTONS = [
    {
        icon: HomardIcon,
        title: 'Homard',
        onPress: (props) => props.navigation.navigate('Homard')
    },
    {
        icon: StJacquesIcon,
        title: 'St Jacques',
        onPress: (props) => props.navigation.navigate('St Jacques')
    },
    {
        icon: BarIcon,
        title: 'Bar',
        onPress: (props) => props.navigation.navigate('Bar')
    },
    {
        icon: PoulpeIcon,
        title: 'Tourteau',
        onPress: (props) => props.navigation.navigate('Tourteau')
    },
    {
        icon: PoulpeIcon,
        title: 'Recette',
        onPress: (props) => props.navigation.navigate('RecetteXYZ')
    },
    {
        icon: PoulpeIcon,
        title: 'Recette',
        onPress: (props) => props.navigation.navigate('Recette2')
    }
]

export default function RecetteScreen(props) {
    return(
        <View style={styles.container}>
            <ImageBackground source={background} resizeMode="cover" style={styles.image}>
                <Text style={styles.header}>Nos Recettes</Text>
                <Text style={styles.textBold}>Toutes les recettes du bateau de Thibault.</Text>
                <Text style={styles.smallText}>06.63.99.99.78</Text>
                <Text style={styles.smallText}>lebateaudethibault@gmail.com</Text>
                <Text style={styles.smallText}>www.facebook.com/lebateaudethibault</Text>
                <View style={{ marginTop: '15%', width: "100%" }}>
                    <View style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        width: '100%'
                    }}>
                        {
                            SMALL_BUTTONS.map(
                                buttonData => (
                                    <Button key={buttonData.title} title={buttonData.title} iconSrc={buttonData.icon} onPress={() => buttonData.onPress(props)}
                                    />
                                )
                            )
                        }
                    </View>
                </View>
            </ImageBackground>     
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
    header: {
        color: "white",
        fontSize: 32,
        textAlign: "center",
        fontStyle: "italic",
        fontWeight: 'bold',
        flex: '1 1 0%',
        marginBottom: '14%'
    },
    smallText: {
        color: "black",
        fontSize: 14,
        textAlign: "center",
        fontStyle: "italic",
    },
    textBold: {
        color: "black",
        fontSize: 14,
        textAlign: "center",
        fontStyle: "italic",
        fontWeight: 'bold'
    },
})
