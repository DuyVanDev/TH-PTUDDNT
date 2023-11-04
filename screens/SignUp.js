import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { firebase } from "../config.js";
import { TextInput, HelperText } from "react-native-paper";

const SignUp = () => {
  const navigation = useNavigation();
  // const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [show,setShow] = useState(true)
  const [showConfirm,setShowConfirm] = useState(true)

  const [confirmPassword, setConfirmPassword] = useState("");

  const hasErrorsEmail = () => {
    return !userEmail.includes("@");
  };

  const hasErrorsPassword = () => {
    return !(userPassword.length >= 8 && userPassword.includes("@"));
  };

  const hasErrorsConfirmPassword = () => {
    return !(userPassword == confirmPassword);
  };

  const handleRegister = async (userEmail, userPassword) => {
    if (!userEmail) return alert("Please fill Email");
    if (!userPassword) return alert("Please fill Address");
    try {
      const register = await firebase
        .auth()
        .createUserWithEmailAndPassword(userEmail, userPassword);
      if (register) {
        console.log("Registration Successful. Please Login to proceed");
      }
      firebase
      .auth()
      .signOut()

    } catch (err) {
      alert(err);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          label="Email"
          value={userEmail}
          onChangeText={(text) => setUserEmail(text)}
          style={styles.input}
        />
        <HelperText type="error" visible={hasErrorsEmail()}>
          Email address is invalid!
        </HelperText>
        <TextInput
          placeholder="Password"
          value={userPassword}
          onChangeText={(text) => setUserPassword(text)}
          style={styles.input}
          secureTextEntry={show}
          right={<TextInput.Icon icon="eye" onPress={() => setShow(!show)} />}

        />
        <HelperText type="error" visible={hasErrorsPassword()}>
          Password khong dung dinh dang{" "}
        </HelperText>
        <TextInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          style={styles.input}
          secureTextEntry={showConfirm}
          right={<TextInput.Icon icon="eye" onPress={() => setShowConfirm(!showConfirm)} />}

        />
        <HelperText type="error" visible={hasErrorsConfirmPassword()}>
          Khong trung voi mat khau
        </HelperText>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleRegister(userEmail, userPassword)}
        >
          <Text style={styles.buttonText}>Dang ky</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignIn")}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
});
