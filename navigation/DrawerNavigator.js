import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { FavoriteStackNavigator, UserStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import { firebase } from "../config.js";
import { Text } from "react-native";

const Drawer = createDrawerNavigator();
function CustomDrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        made with love
      </View>
    </View>
  );
}
const DrawerNavigator = () => {
  return (
    <>
      <Drawer.Navigator>
        <Drawer.Screen name="Contact" component={TabNavigator} />
        <Drawer.Screen name="Favorite" component={FavoriteStackNavigator} />
        <Drawer.Screen name="User" component={UserStackNavigator} />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigator;
