import React from 'react';
import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function imgSwipe({ item }) {

  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  return (

    <TouchableOpacity onPress={() => navigation.navigate('Beach', { data: item })} >
      <View style={[styles.Navcontainer, { width, height: '40%' }]}>
        <View style={{}}>
          <SafeAreaView>
            <Text style={styles.title}>{item.name}</Text>
          </SafeAreaView>
          <Image source={{ uri: item.url }} style={styles.image, { height: '120%', resizeMode: 'contain', marginRight: 10, marginLeft: 10 }} />
          <View style={styles.navContainer, { flex: 0.3 }}>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  navContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 0.7,
    justifyContent: 'center',
    borderRadius: 100,
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 50,
  },
  title: {
    paddingTop: 38,
    fontFamily: 'Roboto',
    fontWeight: '800',
    fontSize: 35,
    color: '#493d8a',
    textAlign: 'center',
  }
})
