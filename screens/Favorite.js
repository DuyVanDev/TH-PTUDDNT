import React, { useEffect, useState } from "react";
import { fetchContacts } from "../untility/api";
import ContactThumbnail from "../components/ContactThumnails";
import { FlatList, Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { StyleSheet } from "react-native";

const keyExtractor = ({phone}) => phone
const Favorite = ({ navigation }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchContacts().then((contact) => {
      setContacts(contact);
      setLoading(true);
    });
  },[]);

  const renderFavoriteThumbnail = ({ item }) => {
    const { avatar } = item;

    return (
      <ContactThumbnail
        avatar={avatar}
        onPress={() => navigation.navigate("Profile", { contact: item })}
      />
    );
  };
  return (
    <View style={styles.container}>
      
      {loading ? (
        <FlatList 
          data={contacts}
          keyExtractor={keyExtractor}
          numColumns={3}
          contentContainerStyle={styles.list}
          renderItem={renderFavoriteThumbnail}
        />
      ) : <ActivityIndicator color="blue" size={"large"} /> }
    </View>
  );
};

export default Favorite;
const styles = StyleSheet.create({
    container: {
        flex :1,
        justifyContent: "center"
    },

    list: {
        alignItems : "center"
    }

})