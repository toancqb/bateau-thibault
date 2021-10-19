import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/atoms';
import FishIcon from '../assets/images/poisson.png'
import ShipIcon from '../assets/images/ancre.png'
import RestaurantIcon from '../assets/images/restaurant.png'
import RecipeIcon from '../assets/images/recette.png'
import ContactIcon from '../assets/images/tourteau.png'
import { Background } from '../components/templates';
import tig from '../assets/images/TIG.png'


const SMALL_BUTTONS = [
    {
        icon: ShipIcon,
        title: 'Bateaux',
        onPress: (props) => props.navigation.navigate('Bateaux')
    },
    {
        icon: RestaurantIcon,
        title: 'Restaurants',
        onPress: (props) => props.navigation.navigate('Restaurants')
    },
    {
        icon: RecipeIcon,
        title: 'Recette',
        onPress: (props) => props.navigation.navigate('Recette')
    },
    {
        icon: ContactIcon,
        title: 'Contact',
        onPress: (props) => props.navigation.navigate('Detail', {
            img: tig,
            header: 'Le Bateaux de Thibault',
            subHeader: '06.63.99.99.78\nlebateaudethibault@gmail.com\nwww.facebook.com/lebateaudethibault\n'
        })
    }
]

export default function HomeScreen(props) {
    return (
        <Background>
            <Text style={styles.header}>Le Bateaux de Thibault</Text>
            <Text style={styles.textBold}>Vent en direct de notre bateau</Text>
            <Text style={styles.textBold}>Produits selon la saison, Livraisons sur Paris</Text>
            <Text style={styles.smallText}>06.63.99.99.78</Text>
            <Text style={styles.smallText}>lebateaudethibault@gmail.com</Text>
            <Text style={styles.smallText}>www.facebook.com/lebateaudethibault</Text>
            <View style={{ marginTop: '15%', width: "100%" }}>
                <View style={{ width: '100%' }}>
                    <Button title="Produits et promotions" iconSrc={FishIcon} onPress={() => props.navigation.navigate('ProductsAndPromotions')} />
                </View>

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
        </Background>
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
        marginBottom: '15%',
        marginTop: '30%'
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

