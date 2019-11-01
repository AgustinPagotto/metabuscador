import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './screens/Home';
import Colors from './constants/Colors';
import SelectedDetailScreen from './screens/SelectedDetailScreen';
import * as firebase from "firebase";
import Login from "./screens/Login";

const MainNavigator = createStackNavigator({
  SearchScreen: Home,
  SelectedDetail: SelectedDetailScreen,
  LoginScreen: Login
  },
  {
    initialRouteName: 'LoginScreen',
    headerLayoutPreset:'center',
    defaultNavigationOptions: {
      title: 'Busqueda de Restaurantes',
      headerStyle: {
        backgroundColor: Colors.primary,
      }
    }
  });

export default createAppContainer(MainNavigator);

var config = {  
  apiKey: "AIzaSyA45CABYPYD-6NQ34qAOk8HDYsq_HW_DqM",
  authDomain: "login-seminario-32f38.firebaseapp.com",
  databaseURL: "https://login-seminario-32f38.firebaseio.com",
  projectId: "login-seminario-32f38",
  storageBucket: "login-seminario-32f38.appspot.com",
  messagingSenderId: "771167554727",

};  
firebase.initializeApp(config);


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
