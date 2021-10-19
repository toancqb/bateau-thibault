import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import background from '../../assets/images/background.png';
import homard from '../../assets/images/homardRecette.png'

export default function ContactScreen() {
    return(
        <View style={styles.container}>
            <ImageBackground source={background} resizeMode="cover" style={styles.image}>
                <Text style={styles.header}>Homard en chaud-froid</Text>
                <Image source={homard} style={styles.imagePoisson}/>
                <Text style={styles.smallText}>Faites cuire les homards dans l'eau bouillante avec du thym, 
                du laurier, du sel et du poivre de Cayenne. Laissez cuire 20 minutes.
                Egouttez-les et laissez-les refroidir.</Text>
                <Text>{"\n"}</Text>
                <Text style={styles.smallText}>Découpez les coffres des homards dans le sens de la longueur.</Text>
                <Text>{"\n"}</Text>
                <Text style={styles.smallText}>Mélangez la mayonnaise avec le cognac, 
                le corail et la ciboulette ciseléee</Text>
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
        marginBottom: '14%',
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