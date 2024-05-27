
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { Image, View } from 'react-native';
import AboutScreen from '../screens/AboutScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Welcome">
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('../assets/health.png')}
                resizeMode="contain"
                style={{ width: 25, height: 25 }}
              />
            </View>
          ),
        }}
        component={HomeScreen}
      />
       {/* <Tab.Screen
        name="About"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('../assets/health.png')}
                resizeMode="contain"
                style={{ width: 25, height: 25 }}
              />
            </View>
          ),
        }}
        component={AboutScreen}
      /> */}
    </Tab.Navigator>
  );
}
