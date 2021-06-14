import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Animated } from 'react-native'
// import Animated from 'react-native-reanimated'

const Progress = ({step, steps, height}) => {
  const [width, setWidth] = React.useState(0);
  const animatedValue = React.useRef(new Animated.Value(-1000)).current;
  const reactive = React.useRef(new Animated.Value(-1000)).current;

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true
    }).start();
  }, []);

  React.useEffect(() => {
    reactive.setValue(-width + (width * step) / steps);
  }, [step, width]);

  return (
    <>
      <Text
        style={{
          fontFamily: 'monospace',
          fontSize: 12,
          fontWeight: '900',
          marginBottom: 8,
        }}
      >
        {step}/{steps}
      </Text>

      <Animated.View
      onLayout={(e) => {
        const newWidth = e.nativeEvent.layout.width;
        setWidth(newWidth);
      }}
        style={{
          height,
          backgroundColor: 'rgba(0,0,0,0.1)',
          borderRadius: height,
          overflow: 'hidden',
        }}
      >
        <Animated.View
          style={{
            height,
            width: '100%',
            backgroundColor: 'red',
            borderStyle: 'solid',
            borderRadius: height,
            overflow: 'hidden',
            position: 'absolute',
            left: 0,
            top: 0,
            transform:[
              {
              translateX: animatedValue,
              }
            ],
          }}
        />
      </Animated.View>
    </>
  )
}

export default function progressBar() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Progress step={2} steps={4} height={20} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
  }
})
