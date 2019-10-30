import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './screens/Home';
import Colors from './constants/Colors';
import SelectedDetailScreen from './screens/SelectedDetailScreen';

const MainNavigator = createStackNavigator({
  SearchScreen: Home,
  SelectedDetail: SelectedDetailScreen
  },
  {
    initialRouteName: 'SearchScreen',
    headerLayoutPreset:'center',
    defaultNavigationOptions: {
      title: 'Busqueda de Restaurantes',
      headerStyle: {
        backgroundColor: Colors.primary,
      }
    }
  });

export default createAppContainer(MainNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
