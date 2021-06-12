import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar  } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';

import Dashboard from './containers/dashboard/dashboard';
import BeachInfo from './components/beachInfo/beachInfo';
import NavBar from './components/navBar/navBar';

export default function App() {
  return (
    <View style={styles.container}>
        <NavBar />
        <Text> Hello from the main app</Text>

    <NativeRouter  >
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/beach' component={BeachInfo} />
        </Switch>

    </NativeRouter>

        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',

    justifyContent: 'center',
    paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0
  },
});
