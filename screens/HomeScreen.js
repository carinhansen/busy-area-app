import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  AsyncStorage,
  Linking,
  Text,
  Alert,
  Button,
  AppState,
  Vibration,
  Platform
} from 'react-native';
import MarkerAreaInformation from "../components/MarkerAreaInformation";
import MapView, {Geojson, PROVIDER_GOOGLE} from 'react-native-maps';
import {Marker, Polyline, Polygon} from 'react-native-maps';
import Areas from '../areaData/areas';
import ClosedAreas from '../areaData/closedAreas';
import DetailArea from '../areaData/detailArea';
import CustomGeojson from "../components/CustomGeojson";
import CustomMarker from "../components/CustomMarker";
import Legend from "../components/Legend";
import HeatmapPoints from '../areaData/heatmap';
import CustomHeatmap from "../components/CustomHeatmap";
import ClosedArea from "../components/ClosedArea";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
// import * as Notifications from "expo-notifications";
import {Notifications} from "expo";
import * as TaskManager from 'expo-task-manager';

let touchX;
let touchY;
let HEATMAPPOINTS = HeatmapPoints;
const mapRef = React.createRef();

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: DetailArea,
      areas: Areas,
      closedAreas: ClosedAreas,
      pressed: false,
      latitude: 52.2202320760974,
      longitude: 5.15521240234375,
      areaId: 0,
      zoom: 3,
      userLocation: null,
      userGeoLocation: null,
      permissions: false,
      notifications: false,
    };

    this.handleZoomEvent = this.handleZoomEvent.bind(this);
  }

  componentDidMount = async () => {
    await this.askPermissionNotifications()
    await this.askPermissionLocation()

    // await TaskManager.isTaskRegisteredAsync('geotask')
    // console.log(this.state.permissions, this.state.notifications)

    // await Location.startGeofencingAsync('geotask', {
    //   identifier: 'GeoTask',
    //   latitude: 52.2202320760974,
    //   longitude: 5.15521240234375,
    //   radius: 200,
    //   notifyOnEnter: true,
    //   accuracy: Location.Accuracy.Balanced,
    //   timeInterval: 1000,
    // }).then(result => console.log(`geotask started`, result))
    //     .catch(err => console.log(err))
    // // this.getLocationsPermissions();
    //
    // // await this.getGeoFence();

    return fetch('https://heatmappoints.firebaseio.com/locations.json')
      .then((response) => response.json())
      .then((responseJson) => {
        for (let key in responseJson) {
          let obj = responseJson[key];
          Location.startGeofencingAsync('geotask', [
            {
              identifier: 'GeoTask',
              latitude: obj.latitude,
              longitude: obj.longitude,
              radius: 200,
              notifyOnEnter: true,
              accuracy: Location.Accuracy.Balanced,
              timeInterval: 1000,
            }
          ]).catch(err => console.log(err));
        }
      }).catch(err => console.log(err));
  };

  // getGeoFence = () => {
  //         this.setState({
  //           userGeoLocation: {
  //             latitude: 52.2202320760974,
  //             longitude: 5.15521240234375,
  //             radius: 100,
  //           }
  //         });
  //
  //
  //       if(this.state.userGeoLocation) {
  //         Location.startGeofencingAsync('geotask', [
  //           {
  //             identifier: 'GeoTask',
  //             latitude: this.state.userGeoLocation.latitude,
  //             longitude: this.state.userGeoLocation.longitude,
  //             radius: 100,
  //           }
  //         ]).catch(err => console.log(err));
  //       }
  //
  // };

  // addGeo() {
  //   Location.startGeofencingAsync('geotask', [
  //     {
  //       identifier: 'GeoTask',
  //       latitude: 52.2202320760974,
  //       longitude: 5.15521240234375,
  //       radius: 10,
  //       notifyOnEnter: true,
  //       notifyOnExit: true,
  //     }
  //   ]).catch(err => console.log(err));
  // }

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

  handleZoomEvent(lat, long) {
    const latitude = lat;
    const longitude = long;
    mapRef.current.animateToRegion({
        latitude,
        longitude,
      }, 4000, this.setState({pressed: false, zoom: 0.2})
    )
  }

  askPermissionLocation = async () => {
    let {status } = await Permissions.askAsync(Permissions.LOCATION);
    console.log("loc status:", status);

    if (status === 'granted') {
      this.setState({permissions: true});
      // // gets your current location
      // navigator.geolocation.getCurrentPosition(position => {
      //   this.setState({
      //     userLocation: {
      //       latitude: position.coords.latitude,
      //       longitude: position.coords.longitude,
      //       latitudeDelta: 0.0422,
      //       longitudeDelta: 0.0421
      //     }
      //   })})
    } else {
      Alert.alert('Check your location permissions!');
      return;
    }


  };

  askPermissionNotifications = async () => {
    let { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    console.log("not status:", status);

    if (status === 'granted') {
      this.setState({notifications: true});
    } else {
      Alert.alert('Check your notification permissions!');
      return;
    }
  };

  render() {
    return (
      <View style={{...StyleSheet.absoluteFillObject, flex: 1}}>
        <MapView
          ref={mapRef}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: this.state.zoom,
            longitudeDelta: this.state.zoom,
          }}
          // region={this.state.userLocation}
          provider={PROVIDER_GOOGLE}
          rotateEnabled={false}
          style={styles.map}
          showsUserLocation={true}
          followUserLocation={true}
          // showsMyLocationButton={true}
        >
          {/*<UrlTile urlTemplate="http://a.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"/>*/}
          <MapView.Marker coordinate={{      latitude: 52.2202320760974,
            longitude: 5.15521240234375}}/>
          {/*<Marker coordinate={{longitude: 4.3964195251464835, latitude: 51.917802869078564}}/>*/}
          <CustomHeatmap points={HEATMAPPOINTS} styles={{zIndex: 999, position: 'absolute',}}/>
          {this.state.areas.map((area, key) => (
            <CustomGeojson geojson={area} key={key} fillColor={area.color} styles={{zIndex: 2}}
            />
          ))}

          <ClosedArea coordinates={[{
            longitude: 5.7836151123046875,
            latitude: 52.06388964477543
          },
            {
              longitude: 5.756835937499999,
              latitude: 52.06304536165708
            },
            {
              longitude: 5.7623291015625,
              latitude: 52.051645977410494
            },
            {
              longitude: 5.7836151123046875,
              latitude: 52.06388964477543
            }]} strokeColor="#000" strokeWidth={6} fillColor="red" styles={{zIndex: 1}}
          />

          {this.state.markers.map((marker,) => (
            <CustomMarker coordinate={marker.coordinates}
                          onPress={(e) => this.pressHandler(e, marker.id)}
                          key={marker.id}
            />
          ))}

          <Polyline coordinates={[
            {latitude: 52.037049464700495, longitude: 5.990810394287109},
            {latitude: 52.03793383755721, longitude: 5.9920549392700195},
            {latitude: 52.03834301907822, longitude: 5.992870330810547},
            {latitude: 52.03868620069179, longitude: 5.994415283203125},
            {latitude: 52.039214167260454, longitude: 5.996088981628417},
          ]}
                    strokeWidth={5}
                    strokeColor="red"
                    fillColor="rgba(255,0,0,0.5)"
                    tappable={true}
                    onPress={() => alert('Dit pad is afgesloten')}
          />
          <Marker coordinate={{latitude: 52.037049464700495, longitude: 5.990810394287109}}>
            <ImageBackground
              source={require('../assets/images/cross.png')} style={styles.markerCross}>
            </ImageBackground>
          </Marker>

        </MapView>

        <Legend/>

        {this.state.pressed ?
          <MarkerAreaInformation id={this.state.areaId} navigate={this.props.navigation.navigate}
                                 action={this.handleZoomEvent}
          /> : null}
      </View>
    );
  }
}

TaskManager.defineTask('geotask', ({data: {eventType, region}, error}) => {
  console.log('taskmanager')
  if (error) {
    // check `error.message` for more details.
    console.log(error)
    return;
  }
  if (eventType === Location.GeofencingEventType.Enter) {
    console.log('test')
    if (AppState.currentState === 'active') {
      Alert.alert('You entered the area!');
      console.log('test')
    } else {
      Notifications.presentLocalNotificationAsync({
        title: 'Entering',
        body: 'You entered the area!',
      });
      console.log('test')
    }
  } else if (eventType === Location.GeofencingEventType.Exit) {
    if (AppState.currentState === 'active') {
      Alert.alert('You left the area! ');
      console.log('test')
    } else {
      Notifications.presentLocalNotificationAsync({
        title: 'Leaving',
        body: 'You left the area!',
      });
      console.log('test')
    }
  }
});

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
  markerCross: {
    width: 15,
    height: 15,
  },
});
