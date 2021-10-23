import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Button } from '../../atoms';
import { contact } from '../../../api';

const MainLayout = (props) => {
    const { header, descriptions, buttons, navigationProps } = props

    return (
        <>
            <Text style={styles.header}>{header}</Text>
            <View style={{
                flex: 1,
            }}>
                {
                    descriptions.map(description => (
                        <Text key={description} style={styles.textBold}>{description}</Text>
                    ))
                }
                <Text style={styles.smallText}>{contact.subHeader}</Text>
            </View>
            <View style={{ marginTop: '15%', width: "100%" }}>
                <View style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    width: '100%'
                }}>
                    {
                        buttons.map(
                            buttonData => (
                                <Button key={buttonData.id} title={buttonData.title} iconSrc={buttonData.icon} onPress={() => buttonData.onPress(navigationProps)}
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
        flex: 1,
        marginBottom: '15%',
        marginTop: '15%'
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