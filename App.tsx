
// Adds 5 to an integer whenever the button is pressed and keep counting it.


import React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element{

const [integer, setInteger] = useState(0)
const [counter, setCounter] = useState(0)
  
  return (
    <View style={styles.body}>
      <Text style= {styles.text}>{integer}</Text>
      <TouchableOpacity 
      style={
        {
          backgroundColor: '#6495ED',
          width: 100,
          height: 50,
          borderRadius: 6.5,
          alignItems: 'center',
          justifyContent: 'center'
        }
      } 
      activeOpacity= {0.1}
      onPress={() => {setInteger(integer+5); setCounter(counter+1)}}>
        <Text style={styles.view1}>{'Add'}</Text>
      </TouchableOpacity>
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
    fontSize: 30,
    fontStyle: 'italic'
  },
  view1: {
    color: '#ffffff',
    fontWeight: 'normal',
    justifyContent: 'center',
    fontSize: 20,
    textTransform: 'uppercase'
  },

});

export default App;
