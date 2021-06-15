import React from 'react';
import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function imgSwipe({ item}) {

  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  return (

    <TouchableOpacity onPress={() => navigation.navigate('Beach', {data:item})} >
      <View style={[styles.Navcontainer, { width, height }]}>
        <View style={{border:'1px solid red'}}>
          <Text style={styles.title}>{item.name}</Text>
          <Image source={{uri:item.url}} style={styles.image,{ height: 500, resizeMode: 'contain'}}/>
          <View style={styles.navContainer, { flex: 0.3 }}>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
   navContainer: {
    // width: '100%',
    // backgroundColor: 'white',
    // flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
    image: {
    flex: 0.7,
    justifyContent: 'center'
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 10,
    color: '#493d8a',
    textAlign: 'center',
  }
})
