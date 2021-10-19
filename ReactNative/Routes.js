import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import React from 'react'

const Stack = createStackNavigator();

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
            />
        </Stack.Navigator>
    </NavigationContainer>
)

export default Routes