import React,{useContext} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import {List} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import {UserProvider, UserContext} from '../context/userContext';



const Todo = ({title, id}) => {
  const navigation = useNavigation();
  const {userInfo} = useContext(UserContext);


  async function toggleComplete() {
    await firestore().collection('todos').doc(id).update({});
  }
  async function deleteService(id) {
    await firestore().collection('todos').doc(id).delete();
  }

  return (
    <View style={{borderWidth: 1,marginVertical: 5, borderRadius: 5, paddingVertical: 20, marginHorizontal : 20, display : "flex", flexDirection : "row", justifyContent: "space-between"}}>
      <TouchableHighlight
        style={{ paddingHorizontal: 20}}
        onPress={() => navigation.navigate('TodoDetail', {title})}>
        <View>
          <Text style={{color: 'black', fontWeight: 'bold'}}>{title}</Text>
        </View>
      </TouchableHighlight>
      {userInfo?.role == "admin" ? <View style={{display : "flex", flexDirection : "row",}}>
      <TouchableHighlight onPress={() => navigation.navigate("Update",{title, id})} >
        <Entypo
            style={{fontSize: 20, marginRight: 20, color: 'black'}}
            name="text-document"
          />
      </TouchableHighlight>
      <TouchableHighlight onPress={() => deleteService(id)}>
        <Entypo
            style={{fontSize: 20, marginRight: 20, color: 'black'}}
            name="trash"
          />
      </TouchableHighlight>
      </View> : null}
    </View>
  );
};

export default Todo;
