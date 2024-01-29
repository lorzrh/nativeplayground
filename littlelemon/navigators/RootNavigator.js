import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome" >
      <Stack.Screen name="Welcome" component={WelcomeScreen}></Stack.Screen>
      <Stack.Screen name="Subscribe" component={SubscribeScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default RootNavigator;
