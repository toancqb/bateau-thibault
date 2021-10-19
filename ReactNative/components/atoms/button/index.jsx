import React from 'react';
import { Text, StyleSheet, Pressable, Image } from 'react-native';

export default function Button(props) {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      {props.iconSrc && (<Image style={styles.tinyLogo} source={props.iconSrc} />)}
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'start',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'rgba(0,0,0, 0.4)',
    margin: 4,
    minHeight: 96,
    display: 'flex',
    flexDirection: 'row'
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginRight: '1rem'
  },
  logo: {
    width: 66,
    height: 58,
  },
});