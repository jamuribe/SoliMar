import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, FlatList, Animated} from 'react-native';
import  getData  from '../../sevices/apiServices';
import ImgSwipe from '../../components/imageSwipe/imgSwipe';
import info from '../../data.json';
import Paginator from '../../animation/paginator';
import NextButton from '../../animation/nextButton';

export default function dashboard() {
  const [beaches, setBeach] = useState([]);


  useEffect(() => {
    getAll();
  }, [])

  const getAll = () => {
    const data = getData();
    setBeach(data.beaches);
  }
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const slidesRef = useRef(null);


  const viewableItemsChanged = useRef(({ viewableItems }) => {
    // console.log(viewableItems)
    setCurrentIndex(viewableItems[0].index)
  }).current;

  const scrollTo = () => {
    if (currentIndex < beaches.length -1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1})
    } else {
      console.log('last')
    }
  }
  return (
    <>
      {/* <View>
        <Text> Water temperature: {info.metInfo.waterTemp} </Text>
        <Text> Air temperature: {info.metInfo.airTemp} </Text>
        <Text> Ultra violet index: {info.metInfo.UVRadiation} </Text>
        <Text> Min temperature: {info.metInfo.maxTemp} </Text>
        <Text> Max temperature: {info.metInfo.minTemp} </Text>
      </View> */}
      <View style={styles.dashBContainer}>
        <FlatList
          horizontal
          data={beaches}
          renderItem={({item}) => <ImgSwipe item={item} />}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.name} // => FIX ID
          onScroll={Animated.event([{ nativeEvent: {contentOffset: { x: scrollX }}}], {
             useNativeDriver: false,
          })}

          onViewableItemsChanged={ viewableItemsChanged }
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={slidesRef}
        />
        {beaches.length ? <NextButton scrollTo={scrollTo} percentage={(currentIndex + 1) * (100 / beaches.length)}/> : null}
      </View>
      <View style={{backgroundColor:'pink'}}>
        <Paginator data={beaches} scrollX={scrollX} />
      </View>


    </>
  )
}
const styles = StyleSheet.create({
  dashBContainer: {
    flex: 2,
    width: '100%',
    height: '50%',
    backgroundColor: 'white',
    // borderColor: 'black',
    // borderStyle: 'solid',
    // marginTop: '10%',
    // padding: '10%',
    alignItems: 'center',
    justifyContent:'center',
  },
})
