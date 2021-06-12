import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { NativeRouter, Route, Switch, useParams } from 'react-router-native';
import { useState, useEffect } from 'react';

import Dashboard from './containers/dashboard/dashboard';
import BeachInfo from './components/beachInfo/beachInfo';
import NavBar from './components/navBar/navBar';
import  getData  from './sevices/apiServices';

export default function App() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getAll();
  }, [])

  const getAll = () => {
    const data = getData();
    setInfo(data);
  }

    return (
      <View style={styles.container}>
        <NavBar />
        <Text> Hello from the main app</Text>
        <NativeRouter >
          <Switch>
            <Route exact path='/'>
            <Dashboard data={info} />
            </Route>
            <Route exact path='/beach'>
              <BeachInfo data={info} />
            </Route>
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
