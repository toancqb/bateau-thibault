import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, Br} from 'react-native';
import background from '../assets/images/background.png';
import { Button } from '../components/atoms';
import tig from '../assets/images/TIG.png'

export default function ContactScreen() {
    return(
        <View style={styles.container}>
            <ImageBackground source={background} resizeMode="cover" style={styles.image}>
                <Text style={styles.header}>Le Bateaux de Thibault</Text>
                <View style={styles.elemContact}>
                    <Image source={tig} style={styles.imageTIG}/>
                    <Text style={styles.smallText}>06.63.99.99.78</Text>
                    <Text style={styles.smallText}>lebateaudethibault@gmail.com</Text>
                    <Text style={styles.smallText}>www.facebook.com/lebateaudethibault</Text>
                </View>
                <View>
                    <Text style={styles.smallText}>Qu'il est chaud le soleil</Text>
                    <Text style={styles.smallText}>Quand nous sommes en vacances</Text>
                    <Text style={styles.smallText}>Y a d'la joie, des hirondelles</Text>
                    <Text style={styles.smallText}>C'est le sud de la France</Text>
                    <Text style={styles.smallText}>Papa bricole au garage</Text>
                    <Text style={styles.smallText}>Maman lit dans la chaise longue</Text>
                    <Text style={styles.smallText}>Dans ce joli paysage</Text>
                    <Text style={styles.smallText}>Moi, je me balade en tongs</Text>
                    <Text>{"\n"}</Text>
                    <Text style={styles.smallText}>Que du Bonheur!</Text>
                    <Text style={styles.smallText}>Que du Bonheur!</Text>
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
    imageTIG: {
        width: '200px',
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