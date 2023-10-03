import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import { TouchableHighlight, View } from "react-native-web";
import { db } from "./config";
import Ionicons from "@expo/vector-icons/Ionicons";

const Item = ({ title, isComplete, onPress }) => (
  <View style={styles.item}>
    {isComplete ? (
      <Ionicons name="close-outline" size={32} color="red" />
    ) : (
      <Ionicons
        name="md-checkmark-circle"
        onPress={onPress}
        size={32}
        color="green"
      />
    )}
    <Text>{title}</Text>
  </View>
);
const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [todoList, setTodoList] = useState([]);
  const handleSubmit = async () => {
    const docRef = await addDoc(collection(db, "todos"), {
      name: todo,
      isComplete: false,
    });
    setTodo("");
  };

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        const { name, isComplete } = doc.data();
        todosArray.push({
          id: doc.id,
          name,
          isComplete,
        });
      });
      setTodoList(todosArray);
    });
    return () => unsub();
  }, []);
  const toggleComplete = async (todo) => {
    console.log(todo.id);
    await updateDoc(doc(db, "todos", todo.id), { isComplete: !todo.completed });
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={todoList}
        renderItem={({ item }) => (
          <Item
            title={item.name}
            isComplete={item.isComplete}
            onPress={() => toggleComplete(item)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.form}>
        <TextInput
        style={{borderColor : "black", borderWidth: 1}}
          placeholder="Enter todo"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <Button title="Submit" color="blue" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginBottom : 20
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  form: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
});

export default TodoList;
