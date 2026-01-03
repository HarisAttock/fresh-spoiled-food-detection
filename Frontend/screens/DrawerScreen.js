import React, { useState, useContext } from 'react';
import { View, Text, Image, Share} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, 
} from '@react-navigation/drawer';
import themeContext from '../config/themeContext';
import BookmarkScreen from './BookmarkScreen';
import SupportScreen from './SupportScreen';
import MaintabScreen from './MaintabScreen';
import AboutScreen from './AboutScreen';
function CustomDrawerContent(props) {
  const theme = useContext(themeContext);
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Check out this app',
        url:
          'https://example.com',
      });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <DrawerContentScrollView {...props}>
    <View style={{backgroundColor: theme.background}}>
    <Text style={{color: theme.color}}></Text>
       <View style={{backgroundColor:'blue',height:140}}>
    <Image style={{height:110,
    width:120,
    marginLeft:69,
     marginTop: 12, 
     borderRadius: 200}}
      source={require("../assets/logos.jpg")}></Image>
    </View>
    </View>
      <DrawerItemList {...props} />
    <DrawerItem
        label="Share"
        icon={() => <AntDesign name="sharealt" size={20} color={"black"}/>}
        onPress={onShare}
      />
  <DrawerItem
  label="Logout"
  icon={() => <Feather name="log-out" size={20} color={"black"}/>}
  onPress={() => props.navigation.navigate('Logins')}
/>
        </DrawerContentScrollView>
  );
}
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
     <Drawer.Screen 
        name="Maintab"
        component={MaintabScreen}
        options={{
          drawerIcon: ({ focused, size }) => (
            <AntDesign
              name="menu-fold"
              size={size}
              color={focused ? '#000000' : 'black'}
            />
          ),
        }}
      />
        <Drawer.Screen 
        name="Bookmark"
        component={BookmarkScreen}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="bookmarks-sharp"
              size={size}
              style={{marginRight: -2}}
              color={focused ? '#000000' : 'black'}
            />
          ),
        }}
      />
       <Drawer.Screen 
        name="Support"
        component={SupportScreen}
        options={{
          drawerIcon: ({ focused, size }) => (
            <FontAwesome5
              name="user-check"
              size={size}
              style={{marginRight: -10}}
              color={focused ? '#000000' : 'black'}
            />
          ),
        }}
      />
        <Drawer.Screen 
        name="About System"
        component={AboutScreen}
        options={{
          drawerIcon: ({ focused, size }) => (
            <AntDesign
              name="exclamationcircle"
              size={size}
              color={focused ? '#000000' : 'black'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
export default function DrawerScreen() {
  return (
  
      <MyDrawer />
  
  );
}
