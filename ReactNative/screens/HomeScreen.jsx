import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import background from '../assets/images/background.png';
import { Button } from '../components/atoms';
import FishIcon from '../assets/images/poisson.png'
import ShipIcon from '../assets/images/ancre.png'
import RestaurantIcon from '../assets/images/restaurant.png'
import RecipeIcon from '../assets/images/recette.png'
import ContactIcon from '../assets/images/tourteau.png'


const BIG_BUTTONS = [
    {
        icon: FishIcon,
        title: 'Produits et promotions',
        onPress: () => this.props.navigation.navigate('ProductsAndPromotion')
    },
]

const SMALL_BUTTONS = [
    {
        icon: ShipIcon,
        title: 'Bateaux',
        onPress: () => props.navigation.navigate('Bateaux')
    },
    {
        icon: RestaurantIcon,
        title: 'Restaurants',
        onPress: () => props.navigation.navigate('Restaurants')
    },
    {
        icon: RecipeIcon,
        title: 'Recette',
        onPress: () => props.navigation.navigate('Recette')
    },
    {
        icon: ContactIcon,
        title: 'Contact',
        onPress: () => props.navigation.navigate('Contact')
    }
]

export default function HomeScreen(props) {
    return (
        <View style={styles.container}>
            <ImageBackground source={background} resizeMode="cover" style={styles.image}>
                <Text style={styles.header}>Le Bateaux de Thibault</Text>
                <Text style={styles.textBold}>Vent en direct de notre bateau</Text>
                <Text style={styles.textBold}>Produits selon la saison, Livraisons sur Paris</Text>
                <Text style={styles.smallText}>06.63.99.99.78</Text>
                <Text style={styles.smallText}>lebateaudethibault@gmail.com</Text>
                <Text style={styles.smallText}>www.facebook.com/lebateaudethibault</Text>
                <View style={{ marginTop: '15%', width: "100%" }}>
                    <View style={{ width: '100%' }}>
                        <Button title="Produits et promotions" iconSrc={FishIcon} onPress={() => props.navigation.navigate('ProductsAndPromotion')} />
                    </View>

                    <View style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        width: '100%'
                    }}>
                        {
                            SMALL_BUTTONS.map(
                                buttonData => (
                                    <Button key={buttonData.title} title={buttonData.title} iconSrc={buttonData.icon} onPress={buttonData.onPress}
                                    />
                                )
                            )
                        }
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    header: {
        color: "white",
        fontSize: 32,
        textAlign: "center",
        fontStyle: "italic",
        fontWeight: 'bold',
        flex: '1 1 0%',
        marginBottom: '15%'
    },
    textBold: {
        color: "black",
        fontSize: 16,
        textAlign: "center",
        fontStyle: "italic",
        fontWeight: 'bold'
    },
    smallText: {
        color: "black",
        fontSize: 14,
        textAlign: "center",
        fontStyle: "italic"
    },
    button: {
        padding: "1rem 2rem"
    }
});

