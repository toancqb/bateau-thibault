import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Button } from '../../atoms';

const MainLayout = (props) => {
    const {header, descriptions, buttons, navigationProps} = props

    return (
        <>
            <Text style={styles.header}>{header}</Text>
            {
                descriptions.map(description => (
                    <Text key={description} style={styles.textBold}>{description}</Text>
                ))
            }
            <Text style={styles.smallText}>06.63.99.99.78</Text>
            <Text style={styles.smallText}>lebateaudethibault@gmail.com</Text>
            <Text style={styles.smallText}>www.facebook.com/lebateaudethibault</Text>
            <View style={{ marginTop: '15%', width: "100%" }}>
                    <View style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        width: '100%'
                    }}>
                        {
                            buttons.map(
                                buttonData => (
                                    <Button key={buttonData.title} title={buttonData.title} iconSrc={buttonData.icon} onPress={() => buttonData.onPress(navigationProps)}
                                    />
                                )
                            )
                        }
                    </View>
                </View>
        </>
    )
}

export default MainLayout

const styles = StyleSheet.create({
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
        fontSize: 14,
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
        padding: "1rem 2rem",
    }
});