import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function () {
  return (
    <View style={styles.container}>
      <View style={styles.cube}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "red",
  },
  cube: {
    width: 100,
    height: 100,
    backgroundColor: "black",
  },
});
