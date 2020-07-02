import * as React from 'react';
import {Text, View, StyleSheet, Image, Linking, Button, TouchableOpacity} from 'react-native';
import IconText from "./IconText";
import GebiedsMarker from '../areaData/detailArea';

const LocationIcon = require('../assets/icons/location.png');
const TimeIcon = require('../assets/icons/time.png');
const OrangeIcon = require('../assets/icons/circle-orange.png');
const DarkRedIcon = require('../assets/icons/circle-dark-red.png');

import AreaDetailScreen from "../screens/AreaDetailScreen";
import CustomButton from "./CustomButton";

export default class MarkerAreaInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      areaInfo: GebiedsMarker,
      detailArea: {},
    };

  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const area = this.state.areaInfo.filter(obj => {
      return obj.id === this.props.id
    });

    this.setState({detailArea: area[0]});
  }


  render() {
    return (
      <View style={[styles.container]}>
        <View>
          <Text style={styles.title}>{this.state.detailArea.title}</Text>
        </View>

        <View style={styles.IconTextContainer}>
          <IconText icon={LocationIcon}
                    text={this.state.detailArea.address ? this.state.detailArea.address : "Adres regel"}/>

          <IconText icon={TimeIcon}
                    text={this.state.detailArea.openinghours ? this.state.detailArea.openinghours : "Toegang van zonsopgang tot zonsondergang"}/>

          <IconText icon={OrangeIcon} text={this.state.detailArea.busy}/>
        </View>

        <CustomButton title="Ga naar gebiedsinformatie"
                      onpress={() => this.props.navigate('AreaDetailScreen', {id: this.props.id})}/>

        <TouchableOpacity
          onPress={() => this.props.action(this.state.detailArea.latitude, this.state.detailArea.longitude)}
        >
          <Text
            style={{
              color: '#CF2C6B',
              textAlign: 'center',
              textDecorationLine: "underline",
              textDecorationStyle: "solid"
            }}>
            Gebied op de kaart
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 80,
    left: 30,
    width: '80%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 4,
  },
  title: {
    color: '#5F5F5F',
    fontSize: 18,
    // textTransform: 'uppercase',
    marginBottom: 20,
    textAlign: 'center',
  },
  IconTextContainer: {
    marginBottom: 20,
  },
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

