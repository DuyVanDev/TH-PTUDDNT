import firestore from '@react-native-firebase/firestore';
import React, { useEffect, useState } from 'react';
import {FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';

import {Appbar, TextInput, Button} from 'react-native-paper';
import Todo from './Todo';

const TodoList = () => {
   
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);
  const ref = firestore().collection('todos');
 
  useEffect(() => {
    return ref.onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        const {title} = doc.data();
        list.push({
          id: doc.id,
          title
        });
      });

      setTodos(list);

      if (loading) {
        setLoading(false);
      }
    });
  }, []);
 
  return (
    <SafeAreaView style={{flex : 1}}>
      
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Todo {...item} />}
      />
      
      
    </SafeAreaView>
  );
};
export default TodoList;
