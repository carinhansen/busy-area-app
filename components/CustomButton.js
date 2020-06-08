import React from 'react';
import {StyleSheet, Text, Button} from 'react-native';

export class ButtonNM extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Button type="button" style={styles.button} title={this.props.name}/>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    color: '#fff',
    backgroundColor: '#CF2C6B',
  }
});

export default ButtonNM;
