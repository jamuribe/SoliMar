import React from 'react';
import { StyleSheet, Text, View, Button, Image, useWindowDimensions } from 'react-native';
import  ProgressBar  from '../../animation/progressBar';

export default function beachInfo({navigation, route}) {
  const { width, height } = useWindowDimensions();
  const params = route.params;
  return (
    <>
    <View style={styles.beachContainer}>
      <Button title='Home' onPress={() => navigation.navigate('Home')} />
      <Text style={{color: '#888', fontSize: 18}}>
        {params.data.name}
      </Text>
      <Image source={{uri:params.data.url}} style={{ width:'90%', height: '40%' }} />

      <View style={{backgroundColor:'#F4D35E', width, margin:'5%', display:'flex', height:'40%'}}>
        <Text>Occupancy:  </Text>
        <ProgressBar step={params.data.occupancy}/>
        <Text>Jellyfish: </Text>
        <ProgressBar step={params.data.jellyfish}/>
        <Text>Sea State: </Text>
        <ProgressBar step={params.data.seaState}/>
      </View>
    </View>

    </>
  )
}

const styles = StyleSheet.create({
   beachContainer: {
    flex: 1,
    backgroundColor: '#FAF0CA',
    alignItems: 'center',
  },
})
