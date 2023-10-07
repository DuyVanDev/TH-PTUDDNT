import React from 'react'
import TabBottom from './TabBottom';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Favorite from '../screens/Favorite';
import User from '../screens/User';
import Profile from './Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const DrawerTab = () => {
  return (
    <Drawer.Navigator 
    >
      <Drawer.Screen name="Contacts" component={TabBottom} />
      <Drawer.Screen name="Favorite" component={TabBottom} />
      <Drawer.Screen name="User" component={TabBottom} />
      <Stack.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  )
}

export default DrawerTab