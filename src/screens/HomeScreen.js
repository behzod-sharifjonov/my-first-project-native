// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/Button';
import Header from '../components/Header';
import { Button } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Header />
      <Text style={styles.text}>Welcome to the Home Screen!</Text>
      <CustomButton
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
       <Button mode="contained" onPress={() => console.log('Pressed')}>
      Contained Button
    </Button>

    <Button mode="outlined" onPress={() => console.log('Pressed')}>
      Outlined Button
    </Button>

    <Button mode="text" onPress={() => console.log('Pressed')}>
      Text Button
    </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default HomeScreen;
