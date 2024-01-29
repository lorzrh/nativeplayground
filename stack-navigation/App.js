import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LittleLemonFooter from './components/LittleLemonFooter'
import LittleLemonHeader from './components/LittleLemonHeader'

import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <LittleLemonHeader></LittleLemonHeader>
        <Stack.Navigator initialRouteName='login' screenOptions={{headerStyle : {backgroundColor: '#FBDABB'}}}>
          <Stack.Screen name="welcome" component={WelcomeScreen} options={{ title: 'Home' }} />
          <Stack.Screen name="login" component={LoginScreen} options={{ title: 'Login'}} />
        </Stack.Navigator>
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

