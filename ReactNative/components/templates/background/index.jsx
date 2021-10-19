import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native';
import background from '../../../assets/images/background.png';

const BackGround = ({ children }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={background} resizeMode="cover" style={styles.image}>
                {children}
            </ImageBackground>
        </View>
    )
}

export default BackGround

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
});