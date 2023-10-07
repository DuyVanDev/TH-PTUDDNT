import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { FavoriteStackNavigator, UserStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Contact" component={TabNavigator} />
      <Drawer.Screen name="Favorite" component={TabNavigator} />
      <Drawer.Screen name="User" component={TabNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;