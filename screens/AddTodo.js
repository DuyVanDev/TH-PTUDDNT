import React, { useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { Button, View,TouchableHighlight } from 'react-native';
import { TextInput,Appbar } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';




const AddTodo = ({navigation}) => {
  const [todo, setTodo] = useState();
const ref = firestore().collection('todos');
  async function addTodo() {
    await ref.add({
      title: todo,
    });
    setTodo('');
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
        <Appbar.Content style={{color: 'white'}} title={'Add'} />
      </Appbar>
      {/* <Button title='Back' onPress={() => navigation.goBack()}/> */}
      <TextInput label={'New Todo'} value={todo} onChangeText={(value) => setTodo(value)} />
      <Button onPress={() => addTodo()} title='Add' />
    </View>
  );
};

export default AddTodo;
