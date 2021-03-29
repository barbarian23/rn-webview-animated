/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component  } from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import HomeScreen from "./src/screen/home/home.screen";

class App extends Component {

  render() {

    return (
    <SafeAreaView >
      <StatusBar barStyle={'light-content'} />
      <HomeScreen />
    </SafeAreaView>
    )
  }

}


export default App;
