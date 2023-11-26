import React, { useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { Button, View,TouchableHighlight } from 'react-native';
import { TextInput,Appbar } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';



const Update = ({navigation, route}) => {
  const {title,id} = route.params;

  const [todo, setTodo] = useState(title);
const ref = firestore().collection('todos');
async function toggleComplete() {
    await firestore()
      .collection('todos')
      .doc(id)
      .update({
        complete: !complete,
      });
  }

  async function updateTodo(id) {
    await firestore()
      .collection('todos')
      .doc(id)
      .update({
        title: todo,
      });
      navigation.goBack()
  }
  return (
    <View style={{display: 'flex', justifyContent: 'flex-end'}}>
      <Appbar style={{backgroundColor: 'blue', color: 'white'}}>
        <TouchableHighlight onPress={() => navigation.goBack()}>
          <AntDesign
            style={{fontSize: 20, marginRight: 20, color: 'white'}}
            name="arrowleft"
          />
        </TouchableHighlight>
        <Appbar.Content style={{color: 'white'}} title={'Update'} />
      </Appbar>
      <TextInput label={'New Todo'} value={todo} onChangeText={(value) => setTodo(value)} />
      <Button onPress={() => updateTodo(id)} title='Update' />
    </View>
  );
};

export default Update;
