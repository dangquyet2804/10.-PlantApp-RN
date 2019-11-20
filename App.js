import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation/Navigation.js';
import * as Font from 'expo-font';
// import myReducer from './redux/reducers/index';
// import { createStore } from 'redux'; 
// import {Provider} from 'react-redux';
// const store = createStore(myReducer);
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAThuTIb6-q32yFy-FUWjuoHPbeAFL1erI",
    authDomain: "plantapp-c5a7d.firebaseapp.com",
    databaseURL: "https://plantapp-c5a7d.firebaseio.com",
    projectId: "plantapp-c5a7d",
    storageBucket: "plantapp-c5a7d.appspot.com",
    messagingSenderId: "198193689698",
    appId: "1:198193689698:web:001ca0cdbe393b75ab4d3b"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'OpenSans-Bold': require('./assets/Fonts/OpenSans-Bold.ttf'),
      'OpenSans-Light': require('./assets/Fonts/OpenSans-Light.ttf')
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    return (
        <View style={{flex: 1}}>
          {
            this.state.fontLoaded ? 
              <Navigation />
            : null
          }
        </View>
    )
  }
}
