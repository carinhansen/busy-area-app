import * as React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import {IconText} from './IconText';

const CircleOrangeIcon = require('../assets/icons/circle-orange.png');
const CircleGreenIcon = require('../assets/icons/circle-green.png');
const CircleYellowIcon = require('../assets/icons/circle-yellow.png');
const CircleRedIcon = require('../assets/icons/circle-red.png');
const CircleDarkRedIcon = require('../assets/icons/circle-dark-red.png');
const heatmapGradient = require('../assets/images/heatmap-gradient.png');

function Legend() {
  return (
    <View style={styles.container}>

      <View style={styles.textContainer}>
        <Image
          style={styles.gradient}
          source={heatmapGradient}
        />
        <View style={styles.iconTextContainer}>
          <Text style={[styles.text]}>rustig</Text>
          <Text style={[styles.text]}>gemiddeld druk</Text>
          <Text style={[styles.text]}>druk</Text>
        </View>
        {/*<View style={styles.iconTextContainer}>*/}
        {/*  <Image*/}
        {/*    style={styles.icon}*/}
        {/*    source={CircleGreenIcon}*/}
        {/*  />*/}
        {/*  <Text style={[styles.text]}>rustig</Text>*/}
        {/*</View>*/}

        {/*<View style={styles.iconTextContainer}>*/}
        {/*  <Image*/}
        {/*    style={styles.icon}*/}
        {/*    source={CircleYellowIcon}*/}
        {/*  />*/}
        {/*  <Text style={[styles.text]}>gemiddelde drukte</Text>*/}
        {/*</View>*/}

        {/*<View style={styles.iconTextContainer}>*/}
        {/*  <Image*/}
        {/*    style={styles.icon}*/}
        {/*    source={CircleRedIcon}*/}
        {/*  />*/}
        {/*  <Text style={[styles.text]}>druk</Text>*/}
        {/*</View>*/}

        {/*<View style={styles.iconTextContainer}>*/}
        {/*  <Image*/}
        {/*    style={styles.icon}*/}
        {/*    source={CircleDarkRedIcon}*/}
        {/*  />*/}
        {/*  <Text style={[styles.text]}>erg druk</Text>*/}
        {/*</View>*/}
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
    // flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 4,
  },
  iconTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  text: {
    color: '#707070',
    // flexWrap: 'wrap',
    fontSize: 12,
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  gradient: {
    width: '100%',
    height: 10,
  }
});

export default Legend;
