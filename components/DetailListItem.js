import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
const DetailListItem = ({ icon, title, subtitle }) => {
  return (
    <View style={{  alignItems: "center", justifyContent: "center" }}>
      <Icon name={icon} size={16} style={{ color: "blue" }} />
      {title} : {subtitle}
    </View>
  );
};

export default DetailListItem;
