import React, { useEffect, useState } from "react";
import ContactListItem from "../components/ContactListItem";
import { fetchContacts } from "../untility/api";
import { ActivityIndicator, Divider } from "react-native-paper";
import {  View } from "react-native";
import { ScrollView } from "react-native-web";

const Contacts = ({navigation}) => {
  const [contactList, setContactList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetchContacts()
      .then((data) => {
        setIsLoading(false);
        setError(false);
        setContactList(data);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);
  return (
    <ScrollView>
      {!isLoading ? (
        <div>
          {contactList.map((item) => {
            return (
              <View key={item.id}>
                <ContactListItem
                  name={item.name}
                  phone={item.phone}
                  avatar={item.avatar}
                  onPress={() => {
                    navigation.navigate("Profile", {
                     contact : item
                    })
                  }}
                />
                <Divider />
              </View>
            );
          })}
        </div>
      ) : (
        <div><ActivityIndicator color="blue" size="large"/></div>
      )}
    </ScrollView>
  );
};

export default Contacts;
