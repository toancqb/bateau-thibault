import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import RecetteScrean from './screens/RecetteScreen';
import HomardScreen from './screens/Recettes/HomardScreen';
import ProductsAndPromotionsScreen from './screens/ProductsAndPromotionsScreen'
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
                name="Contact"
                component={ContactScreen}
            />
            <Stack.Screen
                name="Recette"
                component={RecetteScrean}
            />
            <Stack.Screen
                name="Homard"
                component={HomardScreen}
            />
        </Stack.Navigator>
    </NavigationContainer>
)

export default Routes