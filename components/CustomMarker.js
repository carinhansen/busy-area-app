import * as React from 'react';
import {Marker} from "react-native-maps";
import {ImageBackground, StyleSheet} from "react-native";


function CustomMarker(props) {
  return (
    <Marker {...props}>
      <ImageBackground
        source={require('../assets/images/natuurgebied-icon-01.png')} style={styles.marker}>
      </ImageBackground>
    </Marker>

  )
}

const styles = StyleSheet.create({
  marker: {
    width: 50,
    height: 50,
    marginBottom: 25,
  },
});

export default CustomMarker;
