// import * as React from 'react';
// import { Platform, StatusBar, StyleSheet, View } from 'react-native';
// import { SplashScreen } from 'expo';
// import * as Font from 'expo-font';
// import { Ionicons } from '@expo/vector-icons';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
//
// import BottomTabNavigator from './navigation/BottomTabNavigator';
// import useLinking from './navigation/useLinking';
// import AreaDetailScreen from "./screens/AreaDetailScreen";
// import HomeScreen from "./screens/HomeScreen";
// // import { createStackNavigator, createAppContainer } from 'react-navigation';
//
// const Stack = createStackNavigator();
//
// export default function App(props) {
//   const [isLoadingComplete, setLoadingComplete] = React.useState(false);
//   const [initialNavigationState, setInitialNavigationState] = React.useState();
//   const containerRef = React.useRef();
//   const { getInitialState } = useLinking(containerRef);
//   // Load any resources or data that we need prior to rendering the app
//   React.useEffect(() => {
//     async function loadResourcesAndDataAsync() {
//       try {
//         SplashScreen.preventAutoHide();
//
//         // Load our initial navigation state
//         setInitialNavigationState(await getInitialState());
//
//         // Load fonts
//         await Font.loadAsync({
//           ...Ionicons.font,
//           'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
//         });
//       } catch (e) {
//         // We might want to provide this error information to an error reporting service
//         console.warn(e);
//       } finally {
//         setLoadingComplete(true);
//         SplashScreen.hide();
//       }
//     }
//
//     loadResourcesAndDataAsync();
//   }, []);
//
//   if (!isLoadingComplete && !props.skipLoadingScreen) {
//     return null;
//   } else {
//     return (
//       <View style={styles.container}>
//         {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
//         <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
//           <Stack.Navigator
//             screenOptions={{
//               headerShown: false
//             }}
//           >
//             <Stack.Screen name="Root" component={BottomTabNavigator} />
//             <Stack.Screen name="AreaDetailScreen" component={AreaDetailScreen} />
//           </Stack.Navigator>
//         </NavigationContainer>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });

import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from "./screens/HomeScreen";
import AreaDetailScreen from "./screens/AreaDetailScreen";
import {createStackNavigator} from '@react-navigation/stack';
import MarkerAreaInformation from "./components/MarkerAreaInformation";

const Stack = createStackNavigator();

export default function App() {
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
