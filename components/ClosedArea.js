import * as React from 'react';
import {Marker, Polygon} from 'react-native-maps';
import MapView from "react-native-maps";
import CustomMarker from "./CustomMarker";
import {ImageBackground, StyleSheet, View} from "react-native";

export default class ClosedArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fillColor: null /* you can use isIOS() ? null : 'rgba(60, 165, 255, 0.2)'*/,
      strokeColor: null /* you can use isIOS() ? null : 'rgba(60, 165, 255, 1)'*/,
      opacity: 0
    };
  }

  _setColors() {
    this.setState({
      // fillColor: this.props.fillColor ? this.props.fillColor : 'grey',
      fillColor: 'rgba(200,0,0,0.3)',
      strokeColor: 'red',
    })
  }

  componentDidMount() {
    setTimeout(() => this._setColors(), 10)
  }

  render() {
    const {coordinates} = this.props;
    const {strokeColor, fillColor} = this.state;
    return (
      <View>
        <Polygon
          coordinates={coordinates}
          strokeColor={strokeColor}
          strokeWidth={4}
          fillColor={fillColor}
          tappable={true}
          onPress={() => alert('Dit gebied is afgesloten')}
        />
        <Marker
          coordinate={{latitude: 52.06388964477543, longitude: 5.7836151123046875}}>
          <ImageBackground
            source={require('../assets/images/cross.png')}
            style={styles.markerCross}>
          </ImageBackground>
        </Marker>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  markerCross: {
    width: 15,
    height: 15,
  },
});
