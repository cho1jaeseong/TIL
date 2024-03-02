import { StatusBar } from 'expo-status-bar';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { theme } from './color';
import { useEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
const STORAGE_KEY = "@toDos"
import { Fontisto } from "@expo/vector-icons";
export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState("")
  const [toDos, setToDos] = useState({})
  const travel = async () => {
    setWorking(false)
    await AsyncStorage.setItem("@status", JSON.stringify(false))
  }

  const work = async () => {
    setWorking(true)
    await AsyncStorage.setItem("@status", JSON.stringify(true))
  }

  const saveToDos = async (toSave) => {
    const s = JSON.stringify(toSave)
    const status = JSON.stringify(working)
    await AsyncStorage.setItem(STORAGE_KEY, s)
  }
  const loadToDos = async () => {
    const s = await AsyncStorage.getItem(STORAGE_KEY)
    const stauts = await AsyncStorage.getItem("@status")
    setToDos(JSON.parse(s))
    setWorking(JSON.parse(stauts))
  }
  const addToDo = async () => {
    if (text === "") {
      return;
    } else {
      const newTodos = { ...toDos, [Date.now()]: { text, working, status: false } }
      setText("");
      setToDos(newTodos)
      await saveToDos(newTodos)
      // console.log(newTodos)
    }

  };
  const onChangeText = (event) => {
    setText(event)
  }
  useEffect(() => {
    loadToDos();
  }, []);
  const deleteToDo = (key) => {
    Alert.alert("Delete To Do", "Are you sure?", [
      { text: "Cancel" },
      {
        text: "I'm Sure",
        style: "destructive",
        onPress: () => {
          const newToDos = { ...toDos };
          delete newToDos[key];
          setToDos(newToDos);
          saveToDos(newToDos);
        },
      },
    ]);
  };
  const checkTodo = (key) => {
    Alert.alert("Update Status?", "Are you sure?", [
      { text: "Cancel",
      onPress: () => {
        const newToDos = { ...toDos };
        newToDos[key].status = false
        setToDos(newToDos);
        saveToDos(newToDos);
      }, },
      {
        text: "I'm Sure",
        onPress: () => {
          const newToDos = { ...toDos };
          newToDos[key].status = true
          setToDos(newToDos);
          saveToDos(newToDos);
        },
      },
    ]);
  };
  const prompt = (title, message, defaultValue) => {
  return new Promise((resolve) => {
    Alert.prompt(
      title,
      message,
      [
        {
          text: 'Cancel',
          onPress: () => resolve(null),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: (value) => resolve(value),
        },
      ],
      'plain-text',
      defaultValue
    );
  });
};
  const editTodo = async (key) => {
    const existingText = toDos[key].text;
  
    // 입력값을 받는 prompt을 띄우고 사용자의 입력값을 받습니다.
    const updatedText = await prompt('Edit Todo', 'Edit the todo:', existingText);
  
    if (updatedText !== null) {
      // 사용자가 입력한 값이 null이 아니면 업데이트된 값을 저장합니다.
      const newToDos = { ...toDos };
      newToDos[key].text = updatedText;
      setToDos(newToDos);
      saveToDos(newToDos);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work} >
          <Text style={{ ...styles.btnText, color: working ? "white" : theme.grey }}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel} >
          <Text style={{ ...styles.btnText, color: !working ? "white" : theme.grey }}>Travel</Text>
        </TouchableOpacity>
      </View>

      <TextInput value={text} returnKeyType='done' onSubmitEditing={addToDo} onChangeText={onChangeText} placeholder={working ? "Add a To Do" : "Where do you want to go"} style={styles.input} />
      <ScrollView>
        {Object.keys(toDos).map((key) => (
          toDos[key].working === working ? <View style={styles.toDo} key={key}>
            <Text style={{ ...styles.toDoText, textDecorationLine: toDos[key].status ? 'line-through' : 'none' ,color: toDos[key].status ? theme.gray: "white" }}>
              {toDos[key].text}
            </Text>

            <View style={{ flexDirection: "row", gap: 20 }}>
            <TouchableOpacity onPress={() => editTodo(key)} >
                <Fontisto name="comments" size={18} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => checkTodo(key)} >
                <Fontisto name="check" size={18} color="green" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteToDo(key)}>
                <Fontisto name="trash" size={18} color="white" />
              </TouchableOpacity>

            </View>
          </View> : null
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "space-between",
    marginTop: 100,
    flexDirection: "row"
  },
  btnText: {
    fontWeight: "600",

    fontSize: 38,
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 18,
  },
  toDo: {
    backgroundColor: theme.grey,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  toDoText: {
    
    fontSize: 16,
    fontWeight: "500",
  },

});
