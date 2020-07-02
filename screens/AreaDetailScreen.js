import * as React from 'react';
import {StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Header from "../components/AreaHeader";
import IconText from "../components/IconText";
import detailAreaData from "../areaData/detailArea";
import {ImageBackground} from "react-native-web";
import {BarChart, Grid, XAxis,} from 'react-native-svg-charts'
import ModalDropdown from 'react-native-modal-dropdown';

const LocationIcon = require('../assets/icons/location.png');
const TimeIcon = require('../assets/icons/time.png');
const CircleOrangeIcon = require('../assets/icons/circle-orange.png');

import busyTimes from "../areaData/busyTimes";

const screenWidth = Dimensions.get("window").width;



export default class AreaDetailScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.route.params.id,
      areaInfo: detailAreaData,
      detailArea: {},
      selected: '',
      data: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const area = this.state.areaInfo.filter(obj => {
      return obj.id === this.state.id
    });

    this.setState({detailArea: area[0]});
  }

  // showtimeData(e) {
  //
  // }

  render() {

    const fill = 'rgb(134, 65, 244)'
    const data = [0, 0, 2, 5, 20, 30, 25, 20, 5, 0, 0, 0]
    const labels = ['04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '00:00', '02:00']

    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {/*todo make component*/}
        <View style={{paddingHorizontal: 15, flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
            <Image style={{height: 15, width: 20, marginBottom: 10}}
                   source={require('../assets/icons/arrow-left.png')}/>
          </TouchableOpacity>

          {/*todo add zoom to area*/}
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={{
              color: '#CF2C6B',
              textAlign: 'center',
              textDecorationLine: "underline",
              textDecorationStyle: "solid",
              fontSize: 14
            }}>Kaart</Text>
          </TouchableOpacity>
        </View>


        <Header
          source={{uri: "https://media-cdn.tripadvisor.com/media/photo-m/1280/18/bd/a1/59/magische-kleuren-bij.jpg"}}
          color="white" title={this.state.detailArea.title}/>

        <View style={{backgroundColor: 'white', borderRadius: 20, marginTop: -50}}>
          <Text style={styles.text}>
            {this.state.detailArea.description}
          </Text>

          <View style={styles.iconTextContainer}>
            <IconText icon={LocationIcon}
                      text={this.state.detailArea.address}/>

            <IconText icon={TimeIcon}
                      text={this.state.detailArea.openinghours}/>

            <IconText icon={CircleOrangeIcon} text='Het is rustig'/>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            padding: 10,
            marginBottom: 100,
          }}
        >
          <Text>Verwacht</Text>
          <ModalDropdown style={{position: 'absolute', right: 20, backgroundColor: '#a7a7a5', borderRadius: 5}}
                         textStyle={{color: '#fff', padding: 10}}
                         defaultValue='Vandaag'
                         options={['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag']}
                         onSelect={(e) => this.setState({selected: e})}/>
          <BarChart style={{height: 200}} data={data} svg={{fill}} contentInset={{top: 30, bottom: 10}} yMax={100}>
            <Grid/>
          </BarChart>

          <XAxis
            data={data}
            formatLabel={(value, index) => labels[index]}
            contentInset={{left: 15, right: 15}}
            svg={{fontSize: 8, fill: '#000', rotation: 0}}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 75,
  },
  text: {
    padding: 20,
    lineHeight: 21,
    fontSize: 13,
    marginBottom: 30,
  },
  iconTextContainer: {
    padding: 20,
  },
});
