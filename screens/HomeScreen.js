import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ImageBackground, TextInput} from 'react-native';
import MarkerAreaInformation from "../components/MarkerAreaInformation";
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Heatmap, Geojson, Marker, Polygon} from 'react-native-maps';
import Gebieden from '../areaData/areas';
import GebiedsMarker from '../areaData/detailArea';
import HeatmapPoints from '../areaData/heatmap';
import CustomGeojson from "../components/CustomGeojson";
import CustomHeatmap from "../components/CustomHeatmap";
import CustomMarker from "../components/CustomMarker";
import Legend from "../components/Legend";


let touchX;
let touchY;
let HEATMAPPOINTS = HeatmapPoints;


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: GebiedsMarker,
      areas: Gebieden,
      pressed: false,
      latitude: 52.3202320760974,
      longitude: 5.25521240234375,
      areaId: 0,
      // touched: false,
    };
    // console.log(this.state.touched)
  }

  pressHandler = (e, id) => {
    this.touchX = e.nativeEvent.coordinate.latitude;
    this.touchY = e.nativeEvent.coordinate.longitude;

    this.setState(state => ({
      pressed: !state.pressed,
      areaId: id,
      latitude: this.touchX,
      longitude: this.touchY,
    }));
  };

  render() {
    return (
      <View style={{...StyleSheet.absoluteFillObject, flex: 1}}>
        {/*<TextInput width="100%" height={20} backgroundColor="red" zIndex={999} top={60}/>*/}
        <MapView
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 1.50,
            longitudeDelta: 1.50,
          }}
          provider={PROVIDER_GOOGLE}
          // rotateEnabled={false}
          style={styles.map}
          showsUserLocation
        >
          {/*<UrlTile urlTemplate="http://a.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"/>*/}
          {this.state.areas.map((area, key) => (
            <CustomGeojson geojson={area} key={key} fillColor={area.color}/>
          ))}

          <CustomHeatmap points={HEATMAPPOINTS} style={{zIndex: 9999}}/>

          {this.state.markers.map((marker) => (
            <CustomMarker coordinate={marker.coordinates}
                          onPress={(e) => this.pressHandler(e, marker.id)}
                          key={marker.id}
            />
          ))}
        </MapView>

        <Legend/>

        {this.state.pressed ?
          <MarkerAreaInformation id={this.state.areaId} navigate={this.props.navigation.navigate}/> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  marker: {
    width: 50,
    height: 50,
    marginBottom: 25,
  },
});
