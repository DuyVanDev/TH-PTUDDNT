import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Contacts from '../screens/Contacts';
import Favorite from '../screens/Favorite';
import User from '../screens/User';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const TabBottom = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name="Contact" component={Contacts} options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}   />
          <Tab.Screen name="Favorite" component={Favorite}  options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="heart" color={color} size={size} />
            ),
          }} />
          <Tab.Screen name="Me" component={User}   options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}/>
        </Tab.Navigator>
      );
}

export default TabBottom