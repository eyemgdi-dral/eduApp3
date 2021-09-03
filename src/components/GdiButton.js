import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function ({ title, action, style }) {
  return (
    <View style={[styles.button, style]}>
      <Button title={title} onPress={action} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  button: {
    marginVertical: 5,
  },
});
