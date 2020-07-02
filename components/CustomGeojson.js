import * as React from 'react';
import {Geojson} from 'react-native-maps';
import MapView from "react-native-maps";

export default class CustomGeojson extends React.Component {
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
      fillColor: this.props.fillColor ? this.props.fillColor : 'grey',
      strokeColor: '#000',
    })
  }

  componentDidMount() {
    setTimeout(() => this._setColors(), 10)
  }

  render() {
    const {geojson} = this.props;
    const {strokeColor, fillColor} = this.state;
    return <Geojson
      geojson={geojson}
      strokeColor={strokeColor}
      strokeWidth={2}
      fillColor={fillColor}/>
  }
}
