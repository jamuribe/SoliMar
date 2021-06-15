import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar} from 'react-native';
import { enableScreens } from 'react-native-screens';

import Dashboard from './containers/dashboard/dashboard';
import BeachInfo from './components/beachInfo/beachInfo';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import data from './data.json';

enableScreens();
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>
      <NavigationContainer >
        <Stack.Navigator
          // screenOptions={{
          //   headerShown: false
          // }}
        >
          <Stack.Screen
            options={{
              headerStyle: {
                backgroundColor: '#0D3B66',
             }}}
            name="Home"
            component={Dashboard}
          />
          <Stack.Screen
            options={{
              headerStyle: {
                backgroundColor: '#0D3B66',
             }}}
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

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#FAF0CA',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0
  },
});
