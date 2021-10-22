import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { contact } from '../api';
import { Button } from '../components/atoms';
import { Background } from '../components/templates';

const SMALL_BUTTONS = [
    {
        icon: 'ancre',
        title: 'Bateaux',
        onPress: (props) => props.navigation.navigate('Bateaux')
    },
    {
        icon: 'restaurant',
        title: 'Restaurants',
        onPress: (props) => props.navigation.navigate('Restaurants')
    },
    {
        icon: 'recette',
        title: 'Recette',
        onPress: (props) => props.navigation.navigate('Recette')
    },
    {
        icon: 'tourteau',
        title: 'Contact',
        onPress: (props) => props.navigation.navigate('Detail', {
            img: contact.img,
            header: contact.header,
            subHeader: contact.subHeader,
            content: contact.content
        })
    }
]

export default function HomeScreen(props) {
    return (
        <Background>
            <Text style={styles.header}>Le Bateaux de Thibault</Text>
            <View style={{
                flex: 1,
            }}>
                <Text style={styles.textBold}>Vent en direct de notre bateau</Text>
                <Text style={styles.textBold}>Produits selon la saison, Livraisons sur Paris</Text>
                <Text style={styles.smallText}>06.63.99.99.78</Text>
                <Text style={styles.smallText}>lebateaudethibault@gmail.com</Text>
                <Text style={styles.smallText}>www.facebook.com/lebateaudethibault</Text>
            </View>
            <View style={{ marginTop: '15%', width: "100%" }}>
                <View style={{ width: '100%' }}>
                    <Button title="Produits et promotions" iconSrc={'poisson'} onPress={() => props.navigation.navigate('ProductsAndPromotions')} />
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
        flex: 1,
        marginBottom: '15%',
        marginTop: '15%'
    },
    textBold: {
        color: "black",
        fontSize: 16,
        textAlign: "center",
        fontStyle: "italic",
        fontWeight: 'bold',
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

