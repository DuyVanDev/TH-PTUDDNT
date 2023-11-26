import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import {UserContext} from '../context/userContext';
import TodoDetail from '../screens/TodoDetail';
import TabNavi from './TabNavi';
import AddTodo from '../screens/AddTodo';
import Update from '../screens/Update';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const Index = () => {
  const {userInfo} = useContext(UserContext);

  return (
    
    <>
      {!userInfo ? (
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{headerShown : false}}>
          <Stack.Screen
            name="Home"
            component={TabNavi}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="TodoDetail"
            component={TodoDetail}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="AddTodo"
            component={AddTodo}
            options={{headerShown: false}}
          />

<Stack.Screen
            name="Update"
            component={Update}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      )}
    </>
  );
};

export default Index;
