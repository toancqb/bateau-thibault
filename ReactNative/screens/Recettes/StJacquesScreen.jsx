import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import background from '../../assets/images/background.png';
import stJacques from '../../assets/images/saintJacques.png'

export default function StJacquescreen() {
    return(
        <View style={styles.container}>
            <ImageBackground source={background} resizeMode="cover" style={styles.image}>
                <Text style={styles.header}>Noix de Saint-Jacques flambées au cognac</Text>
                <Image source={stJacques} style={styles.imagePoisson}/>
                <Text style={styles.smallText}>Faire fondre du beurre avec des échalottes puis ajouter
                les noix de Saint-Jacques. Les faire revenir en laissant le milieu translucide puis les
                retirer du feu.</Text>
                <Text>{"\n"}</Text>
                <Text style={styles.smallText}>Ajouter l'ail et le persil dans la poêle et laisser cuire
                quelques secondes. Bien faire chauffer la poêle, puis flamber au Cognac. Une fois éteinte,
                ajouter les noix de Saint-Jacques (Il ne faut pas les flamber car elles perderaient leur saveur).
                </Text>
                <Text>{"\n"}</Text>
                <Text style={styles.smallText}>Déguster chaud nature ou accompagné d'une fondue de poireaux.</Text>
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
