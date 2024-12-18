// src/screens/LoadingScreen.js
import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    // 3 soniyadan so'ng HomeScreen'ga o'tish
    const timer = setTimeout(() => {
      navigation.replace('Home'); // replace bu ekranni almashtiradi, ortga qaytish imkoniyati bo'lmaydi
    }, 4000); // 4000 ms = 4 sekund

    return () => clearTimeout(timer); // Cleanup
  }, [navigation]);

  return (
    <View style={styles.loader}>
      <Image
        style={styles.loader_image}
        source={require('../assets/images/Logo.png')} // Tasvirni moslash
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#356899',
  },
  loader_image: {
    width: 200,
    height: 200,
  },
});

export default LoadingScreen;
