import React, {useEffect, useState, useContext} from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {UserProvider, UserContext} from './context/userContext';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Index from './navigation/Index';


const App = () => {
  const initial = async () => {
    const ref = firestore().collection('users');

    const admin = {
      email: 'chuhaist123@gmail.com',
      password: 'duynguyen',
      role: 'admin',
    };

    await ref.doc(admin.email).onSnapshot(u => {
      if (!u.exists) {
        auth()
          .createUserWithEmailAndPassword(admin.email, admin.password)
          .then(() => {
            ref.doc(admin.email).set({
              ...admin,
            });
          });
      }
    });
  };

  useEffect(() => {
    initial();
  }, []);

  return (
    <NavigationContainer>
      <UserProvider>
        <Index />
        
        {/* <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />

          <Tab.Screen
            name="TodoDetail"
            component={TodoDetail}
            options={{headerShown: false}}
          />
        </Tab.Navigator> */}
      </UserProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
