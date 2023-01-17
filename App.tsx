
// Adds 5 to an integer whenever the button is pressed and keep counting it.


import React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button} from 'react-native';

function App(): JSX.Element {

const [integer, setInteger] = useState(0)
const [counter, setCounter] = useState(0)
  
  return (
    <View style={styles.body}>
      <Text style= {styles.text}>{integer}</Text>
      <Button 
      title='Add' 
      onPress={() => {setInteger(integer+5); setCounter(counter+1)}}/>
      <Text style = {styles.text}>You clicked {counter} times.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  text: {
    color: '#ffffff',
    marginBottom: 30,
    marginTop: 30,
    fontSize: 30
  },
  button: {
     padding: 20
  }
});

export default App;
