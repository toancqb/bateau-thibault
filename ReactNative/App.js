import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import background from './assets/images/background.png';
import { Button } from './components/atoms';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Le Bateaux de Thibault</Text>
        <Text style={styles.text}>Vent en direct de notre bateau</Text>
        <Text style={styles.text}>Produits selon la saison, Livraisons sur Paris</Text>
        <Text style={styles.text}>06.63.99.99.78</Text>
        <Text style={styles.text}>lebateaudethibault@gmail.com</Text>
        <Text style={styles.text}>www.facebook.com/lebateaudethibault</Text>
        <View style={{ marginTop: '2rem', width: "100%" }}>
          <View style={{ width: '100%' }}>
            <Button style={styles.button} color="rgba(0,0,0, .3)" title="Produits et promotions" />
          </View>

          <View style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            width: '100%'
          }}>
            <Button style={styles.button} color="rgba(0,0,0, .3)" title="Bateaux"
            />
            <Button style={styles.button} color="rgba(0,0,0, .3)" title="Restaurants"
            />
            <Button style={styles.button} color="rgba(0,0,0, .3)" title="Recettes"
            />
            <Button style={styles.button} color="rgba(0,0,0, .3)" title="Contact"
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    padding: "1rem 2rem"
  }
});
