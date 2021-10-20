import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import RecetteScrean from './screens/RecetteScreen';
import HomardScreen from './screens/Recettes/HomardScreen';
import StJacquesScreen from './screens/Recettes/StJacquesScreen';
import BarScreen from './screens/Recettes/BarScreen';
import TourteauScreen from './screens/Recettes/TourteauScreen';
import RecetteXYZScreen from './screens/Recettes/RecetteXYZ';
import ProductsAndPromotionsScreen from './screens/ProductsAndPromotionsScreen'
import React from 'react'

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
            <Stack.Screen
                name="Recette"
                component={RecetteScrean}
            />
            <Stack.Screen
                name="Homard"
                component={HomardScreen}
            />
            <Stack.Screen
                name="St Jacques"
                component={StJacquesScreen}
            />
            <Stack.Screen
                name="Bar"
                component={BarScreen}
            />
            <Stack.Screen
                name="Tourteau"
                component={TourteauScreen}
            />
             <Stack.Screen
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