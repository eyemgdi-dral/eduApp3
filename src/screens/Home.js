import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import LoginCmp from "../components/LoginCmp";

// export default function (props) {
const Home = function ({ navigation }) {
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");

  return (
    <View>
      <Text style={styles.pd}>
        Phone - {phone} - {pass}
      </Text>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      <Button title="Flexbox" onPress={() => navigation.navigate("Flexbox")} />
      {/* this user for Data Drill Example */}
      {/* <LoginCmp setPhone={setPhone} setPass={setPass}></LoginCmp> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  pd: {
    padding: 10,
  },
});

export default Home;
