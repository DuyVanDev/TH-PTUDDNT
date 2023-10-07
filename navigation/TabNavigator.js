import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, FavoriteStackNavigator, UserStackNavigator } from "./StackNavigator";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import User from "../screens/User";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown : false}}>
      

      <Tab.Screen name="Contact" component={MainStackNavigator} options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}   />
          <Tab.Screen name="Favorite" component={FavoriteStackNavigator}  options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="heart" color={color} size={size} />
            ),
          }} />
          <Tab.Screen name="User" component={UserStackNavigator}   options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;