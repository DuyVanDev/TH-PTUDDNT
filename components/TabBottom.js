import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Contacts from '../screens/Contacts';
import Favorite from '../screens/Favorite';
import User from '../screens/User';
const Tab = createBottomTabNavigator();

const TabBottom = () => {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Contact" component={Contacts}   />
          <Tab.Screen name="Favorite" component={Favorite}   />
          <Tab.Screen name="Me" component={User}   />
        </Tab.Navigator>
      );
}

export default TabBottom