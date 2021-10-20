import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, Br} from 'react-native';
import background from '../../../assets/images/background.png';
import tig from '../../../assets/images/TIG.png'

export default function DetailPage({route, navigation}) {
    
    const { img = tig, header = 'Le Bateaux de Thibault', subHeader, fullWidth = false } = route.params;

    const styleProps = {
        fullWidth
    }

    return(
        <View style={styles(styleProps).container}>
            <ImageBackground source={background} resizeMode="cover" style={styles(styleProps).image}>
                <Text style={styles(styleProps).header}>{header}</Text>
                <View style={styles(styleProps).elemContact}>
                    <Image source={img} style={styles(styleProps).imageTIG}/>
                    <Text style={styles(styleProps).smallText}>{subHeader}</Text>
                </View>
                <View>
                    <Text style={styles(styleProps).smallText}>Qu'il est chaud le soleil</Text>
                    <Text style={styles(styleProps).smallText}>Quand nous sommes en vacances</Text>
                    <Text style={styles(styleProps).smallText}>Y a d'la joie, des hirondelles</Text>
                    <Text style={styles(styleProps).smallText}>C'est le sud de la France</Text>
                    <Text style={styles(styleProps).smallText}>Papa bricole au garage</Text>
                    <Text style={styles(styleProps).smallText}>Maman lit dans la chaise longue</Text>
                    <Text style={styles(styleProps).smallText}>Dans ce joli paysage</Text>
                    <Text style={styles(styleProps).smallText}>Moi, je me balade en tongs</Text>
                    <Text>{"\n"}</Text>
                    <Text style={styles(styleProps).smallText}>Que du Bonheur!</Text>
                    <Text style={styles(styleProps).smallText}>Que du Bonheur!</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles= ({fullWidth = false}) => StyleSheet.create({
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
    imageTIG: {
        width: fullWidth ? '100vw' : '200px',
        height: '250px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    smallText: {
        color: "black",
        fontSize: 14,
        textAlign: "center",
        fontStyle: "italic",
    },
    elemContact: {
        marginBottom: '10%',
    },
})