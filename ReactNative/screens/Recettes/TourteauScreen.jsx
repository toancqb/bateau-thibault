import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, Br} from 'react-native';
import background from '../../assets/images/background.png';
import tourteau from '../../assets/images/tourteau.png'

export default function TourteauScreen() {
    return(
        <View style={styles.container}>
            <ImageBackground source={background} resizeMode="cover" style={styles.image}>
                <Text style={styles.header}>Tourteau Linguine</Text>
                <Image source={tourteau} style={styles.imagePoisson}/>
                <View>
                    <Text style={styles.smallText}>XXX YYY ZZZ</Text>
                    <Text>{"\n"}</Text>
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
    },
    imagePoisson: {
        width: '305px',
        height: '305px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '20%',
        marginTop: '5%'
    },
    smallText: {
        color: "black",
        fontSize: 14,
        textAlign: "center",
        fontStyle: "italic",
    },
})
