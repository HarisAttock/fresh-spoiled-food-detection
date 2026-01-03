import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';
import IdentifyScreen from './IdentifyScreen';
import ProfileScreen from './ProfileScreen';
const Tab = createMaterialBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      activeColor="white"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'blue' }} 
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="IdentifyScreen"
        component={IdentifyScreen}
        options={{
          tabBarLabel: 'Identify',
          tabBarIcon: ({ color }) => (
            <Ionicons name="camera" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color }) => (
            <EvilIcons name="gear" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function MaintabScreen() {
  return <MyTabs />;
}
