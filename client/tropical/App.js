import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';
import Dashboard from './containers/dashboard/dashboard';
import BeachInfo from './components/beachInfo/beachInfo';
import NavBar from './components/navBar/navBar';

export default function App() {
  return (
    <NativeRouter>

      <View style={styles.container}>
        <NavBar />
        <Text> HI</Text>
        <Switch>
          <Route exact path='/'> <Dashboard /></Route>
          <Route exact path='/beach'> <BeachInfo /></Route>
        </Switch>
        <StatusBar style="auto" />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
