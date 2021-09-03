import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

export default function (props) {
  //Lesson 17 state no longer user in gdiTextInput
  // const [phone, set] = useState();
  return (
    <View>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        {...props}
        style={[styles.input, props.style]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
  },
});
