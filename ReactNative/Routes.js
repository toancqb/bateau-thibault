import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import ProductsAndPromotionsScreen from './screens/ProductsAndPromotionsScreen';
import BateauxScreen from './screens/BateauxScreen';
import RestaurantsScreen from './screens/RestaurantsScreen';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import headerBg from './assets/images/navbarbg.png'
import homeIcon from './assets/images/homeLogo.png'
import cartIcon from './assets/images/cartLogo.png'
import {Image} from 'react-native'
import { ImageHeader } from './components/molecules';

const Stack = createStackNavigator();


const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    title: '',
                    headerTransparent: true,
                }}
                name="Home"
                component={HomeScreen}
            />
            <Stack.Screen
                options={{
                    title: 'Hello',
                    headerTitle: (props) => <ImageHeader {...props}/>,
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        textAlign: 'center',
                        flex: 1,
                        backgroundColor: 'rgb(0,0,0)',
                    },
                    headerRight: () => (
                        <View><Image style={styles.homeLogo} source={cartIcon}/></View>
                    ),
                    headerLeft: (props) => (
                        <Text {...props}><Image  style={styles.homeLogo} source={homeIcon}/></Text>
                    ),
                }}
                name="ProductsAndPromotions"
                component={ProductsAndPromotionsScreen}
            />
            <Stack.Screen
                options={{
                    title: '',
                    headerTransparent: true,
                }}
                name="Detail"
                component={DetailScreen}
            />
            <Stack.Screen
                options={{
                    title: '',
                    headerTransparent: true,
                }}
                name="Bateaux"
                component={BateauxScreen}
            />
            <Stack.Screen
                options={{
                    title: '',
                    headerTransparent: true,
                }}
                name="Restaurants"
                component={RestaurantsScreen}
            />
        </Stack.Navigator>
    </NavigationContainer>
)

const styles = StyleSheet.create({
    homeLogo: {
        width: 24,
        height: 24,
        marginEnd: 16,
        marginStart: 16
    }
})

export default Routes