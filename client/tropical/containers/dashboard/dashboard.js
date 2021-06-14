import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useHistory } from "react-router-native";
// import BeachInfo from '../../components/beachInfo/beachInfo';


export default function dashboard({navigation}) {
  // let history = useHistory();
  // const handleClick = (name) => {
  //   name && history.push('/beach');
  // };

  // if (data.beaches !== undefined) {
    return (
      <View style={styles.dashBcontainer}>
        <Text>This is the Dashboard</Text>
        <Button title='Beach' onPress={() => navigation.navigate('Beach')} />
        {/* {
          data.beaches.map(beach => <Button  infoBeach={beach} title={beach.name} onPress={() => handleClick(beach.name)}/>)
        } */}
      </View>
    )
  // } else return null;
}

const styles = StyleSheet.create({
  dashBContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
