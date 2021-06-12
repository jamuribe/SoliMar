import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useHistory } from 'react-router-native';

export default function beachInfo() {

  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  return (
    <View>
      <Button title='Go Home' onPress={handleClick} />
      <Text>I am the beach info</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   beachContainer: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
