import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import ProductsAndPromotionsScreen from './screens/ProductsAndPromotionsScreen'
import BateauxScreen from './screens/BateauxScreen'
import React from 'react'

const Stack = createStackNavigator();

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name="Home"
                component={HomeScreen}
            />
            <Stack.Screen
                options={{
                    title: 'Le bateau de Thibault',
                    headerStyle: {
                        textAlign: 'center',
                    },
                }}
                name="ProductsAndPromotions"
                component={ProductsAndPromotionsScreen}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="Contact"
                component={ContactScreen}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="Bateaux"
                component={BateauxScreen}
            />
        </Stack.Navigator>
    </NavigationContainer>
)

export default Routes