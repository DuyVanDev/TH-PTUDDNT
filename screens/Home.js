import React, {useContext, useState} from 'react';
import {Text, View, Button, TouchableHighlight} from 'react-native';
import TodoList from '../components/TodoList';
import Todo from '../components/Todo';
import {UserProvider, UserContext} from '../context/userContext';
import auth from '@react-native-firebase/auth';
import {Appbar} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = ({navigation}) => {
  const {userInfo, logoutUser} = useContext(UserContext);

  return (
    <View style={{flex: 1}}>
      <Appbar style={{backgroundColor: 'blue'}}>
        <Appbar.Content title={'SPA'} />
      </Appbar>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginHorizontal: 24,
          marginVertical: 8,
        }}>
        <Text>Danh sách dịch vụ</Text>
        {userInfo?.role == "admin" ? <TouchableHighlight
          style={{display: 'flex', alignItems: 'flex-end'}}
          onPress={() => navigation.navigate('AddTodo')}>
          <MaterialCommunityIcons
            style={{
              backgroundColor: 'pink',
              padding: 14,
              fontSize: 18,
              borderRadius: 10,
            }}
            name="plus"
          />
        </TouchableHighlight> : null}
      </View>
      <TodoList />
      <Button
        style={{backgroundColor: 'blue', color: 'black'}}
        title="Logout"
        onPress={logoutUser}
      />
    </View>
  );
};

export default Home;
