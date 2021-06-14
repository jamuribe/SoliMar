import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function beachInfo({navigation}) {

  const mockInfo = {
      "name": "Sant Sebastià",
      "waterQuality": "1",
      "jellyfish": "1",
      "seaState": "1",
      "occupancy": "2",
      "url": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftravelblogstories.com%2Fwp-content%2Fuploads%2F2018%2F12%2Fsan_sebastian_beach.jpg&f=1&nofb=1"
    };

  return (
    <View style={styles.beachContainer}>
      <Button title='Home' onPress={() => navigation.navigate('Home')} />
      <Text style={{color: '#888', fontSize: 18}}>
        {mockInfo.name}
      </Text>
      <Image source={{uri:mockInfo.url}} style={{ width: 305, height: 159 }} />
    </View>
  )
}

const styles = StyleSheet.create({
   beachContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
})
