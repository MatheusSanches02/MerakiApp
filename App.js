import React from 'react';
import { Text, View, StyleSheet, } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/AntDesign';

import MyScreen from './components/AssetExample';
import TelaMeditacao from './components/TelaMeditacao';
import TelaDiario from './components/TelaDiario';

Icon.loadFont();

const mainNavigation = createMaterialBottomTabNavigator(
  {
    Diário: {
      screen: TelaDiario,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon name="book" size={20} color={focused ? '#4f4f4f' : '#9c9c9c'} />
        ),
      }),
    },
    Respirar: {
      screen: MyScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon2 name="wind" size={20} color={focused ? '#4f4f4f' : '#9c9c9c'} />
        ),
      }),
    },
    Relaxar: {
      screen: TelaMeditacao,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon3 name="sound" size={20} color={focused ? '#4f4f4f' : '#9c9c9c'} />
        ),
      }),
    },
    Conta: {
      screen: MyScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon2 name="user" size={20} color={focused ? '#4f4f4f' : '#9c9c9c'} />
        ),
      }),
    },
  },
  {
    barStyle: {
      backgroundColor: 'white',
    },
  },
);

export default createAppContainer(mainNavigation);
