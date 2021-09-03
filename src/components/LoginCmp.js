import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Button,
  Alert,
} from "react-native";
import GdiButton from "../components/GdiButton";
import GdiTextInput from "../components/GdiTextInput";
import GdiTextarea from "../components/GdiTextarea";
import GdiTextarea2 from "../components/GdiTextarea2";

const LoginCmp = function ({ navigation, setPhone, setPass }) {
  // const arr = useState();
  // const phone = arr[0];
  // const setPhone = arr[1];
  // above is the long-hand code of below;

  //   const [phone, setPhone] = useState();
  //   const [password, setPass] = useState();
  const onChangePhone = (val) => {
    setPhone(val);
    console.log(val);
  };
  const onChangePass = (val) => {
    setPass(val);
    console.log(val);
  };
  return (
    <View>
      <Image style={styles.image} source={require("../../assets/img/bp.jpg")} />
      <Text>Insert user Phone and PASS</Text>
      {/* //Lesson 15 Custom Components and Props */}
      <GdiTextInput
        keyboardType="number-pad"
        style={styles.input}
        placeholder="id"
        onChangeText={onChangePhone}
        // onChangeText={onChangePhone}
      />
      <GdiTextInput
        style={styles.input}
        placeholder="pass"
        onChangeText={onChangePass}
      />
      <TextInput></TextInput>
      <GdiTextarea placeholder="Area">asd</GdiTextarea>
      {/* <GdiTextarea2 placeholder="Area2">
        Something <TextInput>This is text input inside gdiTextArea</TextInput>
      </GdiTextarea2> */}
      <GdiButton
        title="Nevtreh"
        action={() => {
          Alert.alert("nevterlee");
        }}
      />
      <GdiButton
        title="Back"
        action={() => navigation.pop()}
        style={{ marginVertical: 15 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  image: {
    resizeMode: "cover",
    height: "10%",
    width: "100%",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
  },
});

export default LoginCmp;
