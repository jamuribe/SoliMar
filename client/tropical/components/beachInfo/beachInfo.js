import React from 'react';
import { StyleSheet, Text, View, Button, Image, useWindowDimensions } from 'react-native';
import  ProgressBar  from '../../animation/progressBar';

export default function beachInfo({navigation, route}) {
  const { width, height } = useWindowDimensions();
  const params = route.params;
  return (
    <>

    <View style={styles.beachContainer}>
      <Text style={{color: '#888', fontSize: 28, fontFamily:'Roboto', margin:15}}>
        {params.data.name}
      </Text>
      <Image source={{uri:params.data.url}} style={{ width:'90%', height: '40%' }} />

      <View style={{backgroundColor:'#F4D35E', width:'90%', margin:'5%', height:'30%', padding:'2%'}}>
        <Text>Occupancy:  </Text>
        <ProgressBar step={params.data.occupancy}/>
        <Text>Jellyfish: </Text>
        <ProgressBar step={params.data.jellyfish}/>
        <Text>Quality of the water: </Text>
        <ProgressBar step={params.data.waterQuality}/>
      </View>
    </View>
      <Button title='Home' onPress={() => navigation.navigate('Home')} />

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
