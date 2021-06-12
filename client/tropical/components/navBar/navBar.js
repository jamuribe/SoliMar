import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function navBar() {
  return (
    <View style={styles.Navcontainer}>
      <Text >This is the Nav bar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   navContainer: {
    width: '100%',
    backgroundColor: 'black',
    justifyContent: 'center',
  },
})
