import * as React from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Header from "../components/AreaHeader";
import IconText from "../components/IconText";
import detailAreaData from "../areaData/detailArea";

const LocationIcon = require('../assets/icons/location.png');
const TimeIcon = require('../assets/icons/time.png');
const CircleOrangeIcon = require('../assets/icons/circle-orange.png');

export default class AreaDetailScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.route.params.id,
      areaInfo: detailAreaData,
      detailArea: {},
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


  render() {
    return (

      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
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
