import React from 'react';
import { Text, StyleSheet, Pressable, Image } from 'react-native';

export default function Button(props) {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={styles(props).button} onPress={onPress}>
      {props.iconSrc && (<Image style={styles(props).tinyLogo} source={props.iconSrc} />)}
      <Text style={styles(props).text}>{title}</Text>
    </Pressable>
  );
}

const styles = (props) => StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'start',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'rgba(0,0,0, 0.4)',
    margin: 4,
    minHeight: props.minHeight || 96,
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
    width: props.tinyLogoWidth || 50,
    height: props.tinyLogoHeight || 50,
    marginRight: '1rem'
  },
});