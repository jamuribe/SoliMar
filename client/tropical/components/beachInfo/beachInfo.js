import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import  ProgressBar  from '../../animation/progressBar';

export default function beachInfo({navigation, route}) {
  const params = route.params;
  console.log(params.data);
  return (
    <View /*style={styles.beachContainer}*/>
      <Button title='Home' onPress={() => navigation.navigate('Home')} />
      <Text style={{color: '#888', fontSize: 18}}>
        {params.data.name}
      </Text>
      <Image source={{uri:params.data.url}} style={{ width: 305, height: 159 }} />

      <Text>Occupancy:  </Text>
      <ProgressBar step={params.data.occupancy}/>
      <Text>Jellyfish: </Text>
      <ProgressBar step={params.data.jellyfish}/>
      <Text>Sea State: </Text>
      <ProgressBar step={params.data.seaState}/>

    </View>
  )
}

const styles = StyleSheet.create({
   beachContainer: {
    flex: 1,
    backgroundColor: '#FAF0CA',
    // alignItems: 'center',
  },
})
