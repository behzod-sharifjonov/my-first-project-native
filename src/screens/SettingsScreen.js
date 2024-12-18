// src/screens/SettingsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/Button';

const SettingsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Settings Screen</Text>
      <CustomButton
        title="Styled with React Native Paper"
        onPress={() => navigation.navigate('StyledScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default SettingsScreen;
