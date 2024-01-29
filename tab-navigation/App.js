import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import LittleLemonFooter from './components/LittleLemonFooter'
import LittleLemonHeader from './components/LittleLemonHeader'

import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => (
  { 
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === "Home") {
        iconName = focused ? "home" : "home-outline";
      } else if (route.name === "Login") {
        iconName = focused ? "enter" : "enter-outline";
      }
      return <Ionicons name={iconName} size={size} color={color} /> 
    }
  }
);


export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <LittleLemonHeader></LittleLemonHeader>
        <Tab.Navigator screenOptions={screenOptions} initialRouteName="Login">
          <Tab.Screen name="Home" component={WelcomeScreen}></Tab.Screen>
          <Tab.Screen name="Login" component={LoginScreen}></Tab.Screen>
        </Tab.Navigator>
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});

