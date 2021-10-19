import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import ProductsAndPromotionsScreen from './screens/ProductsAndPromotionsScreen';
import BateauxScreen from './screens/BateauxScreen';
import RestaurantsScreen from './screens/RestaurantsScreen';
import React from 'react';
import { Text } from 'react-native';

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
                    title: 'Le bateau de Thibault',
                    headerTintColor: '#fff',
                    headerStyle: {
                        textAlign: 'center',
                        backgroundColor: 'rgba(0,0,0, 0.7)'
                    },
                    headerRight: () => (
                        <Text>Hello</Text>
                    ),
                    headerLeft: () => (
                        <Text>Back</Text>
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
                name="Contact"
                component={ContactScreen}
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

export default Routes