import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import background from '../../../assets/images/background.png';
import { imagePathHelper } from '../../../utils/pathUtils';

export default function DetailPage({route}) {
    
    const { img , header, subHeader, fullWidth, content } = route.params;

    const styleProps = {
        fullWidth
    }

    return(
        <View style={styles(styleProps).container}>
            <ImageBackground source={background} resizeMode="cover" style={styles(styleProps).image}>
                <Text style={styles(styleProps).header}>{header}</Text>
                <View style={styles(styleProps).elemContact}>
                    <Image source={imagePathHelper(img)} style={styles(styleProps).imageTIG}/>
                    <Text style={styles(styleProps).smallText}>{subHeader}</Text>
                </View>
                <View>
                    <Text style={styles(styleProps).smallText}>{content}</Text>
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
        flex: 1,
        marginTop: '15%'
    },
    imageTIG: {
        width: fullWidth ? '100vw' : '250px',
        height: '250px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    smallText: {
        color: "black",
        fontSize: 14,
        textAlign: "center",
        fontStyle: "italic",
        marginBottom: 64
    },
    elemContact: {
        flex: 2
    },
})