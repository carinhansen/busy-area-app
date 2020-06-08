import React from 'react';
import {StyleSheet, ImageBackground, View} from 'react-native';
import HeaderTitle from "./HeaderTitle";

export class Header extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: this.props.color, marginBottom: 10}}>
        <ImageBackground {...this.props} style={[styles.header, this.props.style]}>
          <HeaderTitle>{this.props.title}</HeaderTitle>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: 230,
    flex: 1,
    justifyContent: 'center',
    opacity: 0.7,
    marginBottom: 20,
  }
});

export default Header;
