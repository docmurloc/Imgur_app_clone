import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from "../Components/HomeScreen";
import Profile from "../Components/ProfileScreen";
import ConnectionScreen from '../Components/ConnectionScreen'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Connection"
            component={ConnectionScreen}
            options={{title: 'connection'}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;