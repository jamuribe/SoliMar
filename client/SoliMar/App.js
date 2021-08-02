import React, { useState, useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import Main from './containers/main/main';


export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])


  return (
    <>
      {
        loading ?
          <Image source={require('./assets/solimst.png')} style={styles.image} />
          :
          <Main />
      }
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    display: 'flex',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    top: '30%'
  }
});