import * as React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import {IconText} from './IconText';
const CircleOrangeIcon = require('../assets/icons/circle-orange.png');

function Legend() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.iconTextContainer}>
          <Image
            style={styles.icon}
            source={CircleOrangeIcon}
          />
          <Text style={[styles.text]}>het is druk</Text>
        </View>

        <View style={styles.iconTextContainer}>
          <Image
            style={styles.icon}
            source={CircleOrangeIcon}
          />
          <Text style={[styles.text]}>het is druk</Text>
        </View>

        <View style={styles.iconTextContainer}>
          <Image
            style={styles.icon}
            source={CircleOrangeIcon}
          />
          <Text style={[styles.text]}>het is druk</Text>
        </View>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10,
    padding: 20,
    width: '100%',
  },
  textContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  iconTextContainer: {
    // marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#707070',
    flexWrap: 'wrap',
    fontSize: 12,
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
});

export default Legend;
