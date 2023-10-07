import React from "react";
import Contacts from "../screens/Contacts";
import Profile from "../components/Profile";
import Favorite from "../screens/Favorite";
import User from "../screens/User";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerShown : false,
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} >
      <Stack.Screen name="Contact" component={Contacts} />
      <Stack.Screen name="Profile" component={Profile} />

    </Stack.Navigator>
  );
}

const FavoriteStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Favorite" component={Favorite} />
    </Stack.Navigator>
  );
}

const UserStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="User" component={User} />
      </Stack.Navigator>
    );
  }
export { MainStackNavigator, UserStackNavigator,FavoriteStackNavigator };