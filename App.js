import React from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import WelcomeScreen from './Screens/LoginOrSignUp';

export default function App() {
  return (
    <AppContainer/>
  );
}

const AppContainer = createAppContainer(switchNavigator);
