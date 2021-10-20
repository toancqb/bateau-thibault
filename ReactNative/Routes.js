import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import BateauxScreen from './screens/BateauxScreen';
import RestaurantsScreen from './screens/RestaurantsScreen';
import DetailScreen from './screens/DetailScreen';
import RecetteScrean from './screens/RecetteScreen';
import HomardScreen from './screens/Recettes/HomardScreen';
import StJacquesScreen from './screens/Recettes/StJacquesScreen';
import BarScreen from './screens/Recettes/BarScreen';
import TourteauScreen from './screens/Recettes/TourteauScreen';
import RecetteXYZScreen from './screens/Recettes/RecetteXYZ';
import ProductsAndPromotionsScreen from './screens/ProductsAndPromotionsScreen';
import ProductsListScreen from './screens/ProductsListScreen';
import CartScreen from './screens/CartScreen';

import { Pressable, StyleSheet, Image, Text, View } from 'react-native';
import React from 'react'
import cartIcon from './assets/images/cartLogo.png'
import homeIcon from './assets/images/homeLogo.png'
import { ImageHeader } from "./components/molecules";

const Stack = createStackNavigator();

const headerSpecialOption = ({navigation}) => ({
    headerTitle: (props) => <ImageHeader {...props} />,
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
    headerStyle: {
        textAlign: 'center',
        flex: 1,
        backgroundColor: 'rgb(0,0,0)',
    },
    headerRight: () => (
        <Pressable onPress={() => navigation.navigate('Cart')}><Image style={styles.homeLogo} source={cartIcon} /></Pressable>
    ),
    headerLeft: (props) => (
        <Pressable {...props}  onPress={() => navigation.navigate('Home')}><Image style={styles.homeLogo} source={homeIcon}/></Pressable>
    ),
})

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
                options={headerSpecialOption}
                name="ProductsAndPromotions"
                component={ProductsAndPromotionsScreen}
            />
            <Stack.Screen
                options={headerSpecialOption}
                name="ProductsList"
                component={ProductsListScreen}
            />
            <Stack.Screen
                options={headerSpecialOption}
                name="Cart"
                component={CartScreen}
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
            <Stack.Screen
                options={{
                    title: '',
                    headerTransparent: true,
                }}
                name="Recette"
                component={RecetteScrean}
            />
            <Stack.Screen
                options={{
                    title: '',
                    headerTransparent: true,
                }}
                name="Homard"
                component={HomardScreen}
            />
            <Stack.Screen
                options={{
                    title: '',
                    headerTransparent: true,
                }}
                name="St Jacques"
                component={StJacquesScreen}
            />
            <Stack.Screen
                options={{
                    title: '',
                    headerTransparent: true,
                }}
                name="Bar"
                component={BarScreen}
            />
            <Stack.Screen
                options={{
                    title: '',
                    headerTransparent: true,
                }}
                name="Tourteau"
                component={TourteauScreen}
            />
            <Stack.Screen
                options={{
                    title: '',
                    headerTransparent: true,
                }}
                name="RecetteXYZ"
                component={RecetteXYZScreen}
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