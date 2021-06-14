import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, FlatList} from 'react-native';
import  getData  from '../../sevices/apiServices';
import ImgSwipe from '../../components/imageSwipe/imgSwipe';


export default function dashboard({navigation}) {

  const [beaches, setBeach] = useState([]);
  useEffect(() => {
    getAll();
  }, [])

  const getAll = () => {
    const data = getData();
    setBeach(data.beaches);
  }
  // console.log(beaches[0], ' aqui');


  return (
    <View style={styles.dashBContainer}>
      <FlatList
        horizontal
        data={beaches}
        renderItem={({item}) => <ImgSwipe item={item} />} />
    </View>
  )

  // return (
  //   <View style={styles.dashBContainer}>
  //     <Text style={{color: 'white'}} >This is the Dashboard</Text>
  //     {
  //       beaches.map(beach => (<FlatList  horizontal='true' >
  //           <TouchableOpacity onPress={() => navigation.navigate('Beach', {data:beach})} >
  //             <View style={{ flex: 0.3}}>
  //               <Image source={{uri:beach.url}} />
  //               <Text> title={beach.name} </Text>
  //             </View>
  //           </TouchableOpacity>
  //         </FlatList>)
  //     )
  //     }
  //   </View>
  // )
}
const styles = StyleSheet.create({
  dashBContainer: {
    // flex: 2,
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',

  },

})

/*<Button color='red' title={beach.name} onPress={() => navigation.navigate('Beach', {data:beach})} />)*/
