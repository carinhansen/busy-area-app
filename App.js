import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from "./screens/HomeScreen";
import AreaDetailScreen from "./screens/AreaDetailScreen";
import {createStackNavigator} from '@react-navigation/stack';
import * as TaskManager from "expo-task-manager";
import * as Location from "expo-location";

const Stack = createStackNavigator();

export default class App extends React.Component {

  render() {

    return (
      <NavigationContainer>
        {/* Rest of your app code */}
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Welcome'}}

          />
          <Stack.Screen
            name="AreaDetailScreen"
            component={AreaDetailScreen}/>
          {/*<Stack.Screen*/}
          {/*  name="MarkerAreaInformation"*/}
          {/*  component={MarkerAreaInformation}/>*/}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
