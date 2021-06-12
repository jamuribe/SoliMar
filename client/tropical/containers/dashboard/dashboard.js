import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState, useEffect } from 'react';
import  getData  from '../../sevices/apiServices';
import { useHistory } from "react-router-native";

export default function dashboard() {

  let history = useHistory();

  const handleClick = () => {
    history.push('/beach');
  };

  const [info, setInfo] = useState([]);

  useEffect(() => {
    getAll();
  }, [])

  const getAll = () => {
    const data = getData();
    setInfo(data);
  }

  return (
    <View style={styles.dashBcontainer}>
      <Button title='hi' onPress={handleClick} />

      <Text>This is the Dashboard</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  dashBContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
