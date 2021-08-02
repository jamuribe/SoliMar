import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Platform, StatusBar } from 'react-native';
import { enableScreens } from 'react-native-screens';
import Dashboard from '../dashboard/dashboard';
import BeachInfo from '../../components/beachInfo/beachInfo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

const Stack = createNativeStackNavigator();
enableScreens();

export default function Main() {

  return (
    <>
      <NavigationContainer >
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            options={{ headerStyle: { backgroundColor: '#0D3B66' } }}
            name="Home"
            component={Dashboard}
          />
          <Stack.Screen
            options={{ headerStyle: { backgroundColor: '#0D3B66' } }}
            name="Beach"
            component={BeachInfo}
          />
        </Stack.Navigator>
      </NavigationContainer>

      <View>
        {/* <Button Component here/> */}
      </View>
    </>
  );
}
