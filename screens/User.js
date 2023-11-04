import React, { useEffect, useState } from "react";
import { fetchRandomContact } from "../untility/api";
import { View, TouchableHighlight, Text } from "react-native";
import { StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import ContactThumbnail from "../components/ContactThumnails";
import { firebase } from "../config.js";

const User = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const userFb = firebase.auth().currentUser;

  useEffect(() => {
    userFb.providerData.forEach((userInfo) => {
      setUser(userInfo);
    });
    setIsLoading(true)
  }, []);
  console.log(user);

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("User signed out!"));
  };
  return (
    <View style={styles.container}>
      {isLoading ? (
        <View>
          <ContactThumbnail
            name={user.email}
          />
          <TouchableHighlight style={{alignSelf : "center"}} onPress={() => logout()}>
            <Text>Logout</Text>
          </TouchableHighlight>
        </View>
      ) : (
        <ActivityIndicator color="blue" size={"large"} />
      )}
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
