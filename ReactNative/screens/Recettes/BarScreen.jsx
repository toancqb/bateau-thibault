import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import background from '../../assets/images/background.png';
import bar from '../../assets/images/barRecette.png'

export default function BarScreen() {
    return(
        <View style={styles.container}>
            <ImageBackground source={background} resizeMode="cover" style={styles.image}>
                <Text style={styles.header}>Bar rôti au laurier frais</Text>
                <Image source={bar} style={styles.imagePoisson}/>
                <Text style={styles.smallText}>Sur une plaque ou un plat allant au four, disposer
                 quelques feuilles de laurier frais, verser un filet d'huile d'olive et du gros sel.
                 Disposer le bar, puis l'arroser d'un filet d'huile d'olive et mettre un peu de gros
                 sel sur la peau.</Text>
                <Text>{"\n"}</Text>
                <Text style={styles.smallText}>Cuire au four pendant 12 min à 240°C.</Text>
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
        marginBottom: '30%',
    },
    imagePoisson: {
        width: '370px',
        height: '200px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '20%',
    },
    smallText: {
        color: "black",
        fontSize: 14,
        textAlign: "center",
        fontStyle: "italic",
    },
})
