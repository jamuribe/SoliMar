import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useHistory } from "react-router-native";

export default function dashboard({data}) {

  let history = useHistory();

  const handleClick = () => {
    history.push('/beach');
  };

  if (data.beaches !== undefined) {

    return (
      <View style={styles.dashBcontainer}>
        {/* <Button title='hi' onPress={handleClick} /> */}

        <Text>This is the Dashboard</Text>
        {
          data.beaches.map(beach => <Button title={beach.name} onPress={handleClick}/>)
        }
      </View>
    )
  } else return null;

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
