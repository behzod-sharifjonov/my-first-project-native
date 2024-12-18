// src/navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Loading from '../screens/LoadingScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import StyledScreen from '../screens/StyledScreens';

// Stack navigator yaratish
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      {/* Global ravishda header'ni yashirish */}
      <Stack.Navigator
        initialRouteName="Loader"
        screenOptions={{ headerShown: false }} // Barcha ekranlar uchun headerni yashirish
      >
        {/* Individual ravishda header'ni sozlash */}
        <Stack.Screen
          name="Loader"
          component={Loading}
          options={{ headerShown: false }} // Loader ekranida header yashirilgan
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false, title: 'Home Page' }} // Home ekranida header ko'rsatiladi
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerShown: true, title: 'Settings' }} // Settings ekranida header ko'rsatiladi
        />
        <Stack.Screen
          name="StyledScreen"
          component={StyledScreen}
          options={{ headerShown: false }} // StyledScreen ekranida header yashirilgan
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
