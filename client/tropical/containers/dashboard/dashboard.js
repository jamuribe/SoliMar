import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import  getData  from '../../sevices/apiServices';

export default function dashboard({navigation}) {

  const [info, setInfo] = useState([]);
  useEffect(() => {
    getAll();
  }, [])

  const getAll = () => {
    const data = getData();
    setInfo(data);
  }

  if (info.beaches !== undefined) {
    return (
      <View style={styles.dashBcontainer}>
        <Text>This is the Dashboard</Text>
        {
          info.beaches.map(beach => <Button title={beach.name} onPress={() => navigation.navigate('Beach', {data:beach})} />)
        }
      </View>
    )
    } else return null;
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
