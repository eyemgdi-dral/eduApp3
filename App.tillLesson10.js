import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
//lesson 8 - structure,
//lesson 9 - button, touchableOpacity
//lesson 10 - new window, navigation => npm i @react-navigation/native
//use link below to solve if 'expo' command doesnt work
//=> https://dev.to/osmanforhad/expo-ps1-cannot-be-loaded-because-running-scripts-is-disabled-on-this-system-5h81
export default function App() {
  const login = () => Alert.alert("button 2 darla");
  const tell = (val) => {
    Alert.alert(val);
  };
  return (
    <View style={styles.container}>
      <Text>Lorem Ipsum</Text>
      <TouchableOpacity
        onPress={tell.bind(this, "TouchableOpacity is working")}
      >
        <Text style={styles.common}>Lorem Ipsum</Text>
        <Text style={styles.common}>Lorem Ipsum</Text>
      </TouchableOpacity>
      <Button
        title="Button 1"
        onPress={() => Alert.alert("Button 1 - g darla")}
      />
      <Button title="Button 2" onPress={login} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  common: {
    color: "blue",
  },
});
