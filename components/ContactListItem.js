import React, { useEffect, useState } from "react";
import { fetchContacts } from "../untility/api";
import { Image, Text, TouchableHighlight, View } from "react-native";
import colors from "../untility/colors";
import { Divider } from "react-native-paper";

const ContactListItem = ({ name, phone, avatar, onPress }) => {

  return (
    <TouchableHighlight underlayColor={colors.grey} onPress={onPress}>
      <View
      style={{  
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ width: 50, height: 50 }}>
        <Image
          source={{
            uri: avatar,
          }}
          style={{ flex: 1, width: 40, height: 40 }}
        />
      </View>
      <View style={{ flex: 4 }}>
        <Text>{name}</Text>
        <Text>{phone}</Text>
      </View>
      <Divider />
    </View>
    </TouchableHighlight>
  );
};

export default ContactListItem;
