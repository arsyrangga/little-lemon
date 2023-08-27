import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import SubscribeScreen from '../screens/SubscribeScreen';

const Stack = createNativeStackNavigator();


const RootNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: 'bold',
          },
    }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="SubscribeScreen" component={SubscribeScreen} options={{title : "Subscribe"}} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default RootNavigator