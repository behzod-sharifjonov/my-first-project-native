// src/screens/StyledScreen.js
import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native'; // To'g'ri importlar
import { Button, Text } from 'react-native-paper';

const StyledScreen = () => {
  return (
    <ScrollView>
      <Text style={styles.text}>Bu ScrollView misoli</Text>
      <Image
        source={{ uri: 'https://cdn.pixabay.com/photo/2022/10/14/15/03/cabot-trail-7521521_640.jpg' }}
        style={styles.image}
      />
      <Image
        source={{ uri: 'https://cdn.pixabay.com/photo/2022/10/21/14/20/natue-7537186_640.jpg' }}
        style={styles.image}
      />
      <Image
        source={{ uri: 'https://t4.ftcdn.net/jpg/06/63/37/03/360_F_663370326_7QsGol7ucMWvnPz5dYLPECFhzXMdFD8W.jpg' }}
        style={styles.image}
      />
      <Text style={styles.text}>Kontent aylantiriladi</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    margin: 10,
  },
  image: {
    width: '100%',
    height: 500,
    margin: 10,
  },
});

export default StyledScreen;
