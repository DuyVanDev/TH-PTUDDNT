import React, { useEffect, useState } from "react";
import ContactListItem from "../components/ContactListItem";
import { fetchContacts } from "../untility/api";
import {  View , ActivityIndicator, ScrollView} from "react-native";
import { Divider } from "react-native-paper";

const Contacts = ({navigation}) => {
  const [contactList, setContactList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetchContacts()
      .then((data) => {
        setIsLoading(true);
        setError(false);
        setContactList(data);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);
  return (
    <ScrollView>
      {isLoading ? (
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