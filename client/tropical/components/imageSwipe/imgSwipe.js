import React from 'react';
import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function imgSwipe({ item}) {

  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  return (
    <TouchableOpacity onPress={() => navigation.navigate({routeName:'Beach'}, {data:item})} >
      <View style={[styles.Navcontainer, { width }]}>
        <View style={{margin: '5%'}}>
          <Image source={{uri:item.url}} style={styles.image,{ height:400, resizeMode: 'contain'}}/>
          {/* <Image source={{uri:item.url}} style={[styles.image, { width, resizeMode: 'contain' }]} />
        */}
          <View style={{ flex: 0.3 }}>
            <Text style={{color:'white'}}>{item.title}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
   navContainer: {
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
    image: {
    flex: 0.7,
    justifyContent: 'center'
  }
})
