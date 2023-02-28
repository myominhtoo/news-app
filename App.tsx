import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text ,
  View,
} from 'react-native';
import HomeScreen from './src/screens/home.screen';
import axios from 'axios';
import { API_KEY, BASE_URL } from './src/data/api.data';
import { colors } from './src/data/style.data';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './src/navigation/stack/home.stack';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['X-Api-Key'] = API_KEY;


function App(): JSX.Element {

  return (
    <SafeAreaView style={styles.container} >
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    paddingHorizontal : 7,
    backgroundColor : colors.DARK,
  }
});

export default App;
