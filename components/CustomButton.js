import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';


function CustomButton(props) {
  const {title, onpress} = props;
  return (
    <TouchableOpacity onPress={onpress}>
      <View style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: '#CF2C6B',
    marginBottom: 10,
  },
  text: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center'
  }
});

export default CustomButton;
