import React, { useEffect, useState } from "react";
import { fetchRandomContact } from "../untility/api";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import ContactThumbnail from "../components/ContactThumnails";

const User = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchRandomContact().then((data) => {
      setUser(data);
      setIsLoading(true);
    });
  }, []);
  console.log(user);
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ContactThumbnail
          avatar={user.avatar}
          phone={user.phone}
          name={user.name}
        />
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
