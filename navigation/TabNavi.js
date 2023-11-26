import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home';
import AddTodo from '../screens/AddTodo';
import TodoList from '../components/TodoList';
const Tab = createBottomTabNavigator();

const TabNavi = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown : false}}>
      <Tab.Screen
        name="Home1"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Home2"
        component={AddTodo}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="star" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Home3"
        component={TodoList}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="mail" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavi;
