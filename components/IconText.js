import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export class IconText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.iconTextContainer}>
        <Image
          style={styles.icon}
          source={this.props.icon}
        />
        <Text style={[styles.text]}>{this.props.text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  iconTextContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    color: '#707070',
    flexWrap: 'wrap',
    fontSize: 12,
    flex: 1,
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
});

export default IconText;
