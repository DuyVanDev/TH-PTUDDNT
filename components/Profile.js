import React, { useEffect, useState } from 'react'
import { View } from 'react-native-web'
import { fetchRandomContact } from "../untility/api";
import ContactThumbnail from './ContactThumnails';
import DetailListItem from './DetailListItem';
import { StyleSheet } from 'react-native';

const Profile = ({route}) => {
    
    const {contact} = route.params;
  return (
    <View style={styles.container}>
        <View>
            <ContactThumbnail avatar={contact.avatar} name={contact.name}  phone={contact.phone} />
        </View>
        <View style={styles.avatar}>
            <DetailListItem icon="mail" title="Email" subtitle={contact.email} />
            <DetailListItem icon="phone" title="Work" subtitle={contact.phone} />
            <DetailListItem icon="smartphone" title="Peronal" subtitle={contact.cell} />
        </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    avatar : {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})