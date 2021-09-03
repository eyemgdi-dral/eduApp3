import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

export default function (props) {
  return (
    <View>
      <TextInput
        multiline={true}
        numberOfLines={5}
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
