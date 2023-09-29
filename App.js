import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Contacts from "./screens/Contacts";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "./components/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBottom from "./components/TabBottom";
import EmptyScreen from "./components/EmptyScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Contact" component={TabBottom} options={{headerShown : false}} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
