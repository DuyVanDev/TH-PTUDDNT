import React, {useState, useContext} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import {TextInput, HelperText} from 'react-native-paper';
import {UserContext} from '../context/userContext';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(true);
  let {loginUser,errMessage} = useContext(UserContext);

  const [err, setErr] = useState(null);

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
      <View
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          gap: 20,
          paddingHorizontal: 20,
        }}>
          <Text style={{textAlign: 'center', fontSize: 34, color: 'black'}}>LOGIN</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry={show}
          right={<TextInput.Icon icon="eye" onPress={() => setShow(!show)} />}
        />
        <Text style={{color : "red"}}>{errMessage}</Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 50,
            paddingVertical: 20,
          }}
          onPress={() => loginUser(email, password)}>
          <Text style={{textAlign: 'center', fontSize: 24, color: 'white'}}>
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 50,
            paddingVertical: 10,
          }}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={{textAlign: 'center', fontSize: 24, color: 'white'}}>
            Register
          </Text>
        </TouchableOpacity>
      </View>

      
      {/* <View>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text>Quen mat khau</Text>
        </TouchableOpacity>
      </View> */}
      <View>{err && <Text style={{color: 'red'}}>{err}</Text>}</View>
      {/* <Button title="Google Sign-In" onPress={onGoogleButtonPress} /> */}
    </KeyboardAvoidingView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
