import React from "react";
import HomeScreen from "./src/screens/Home";
import LoginScreen from "./src/screens/Login";
import FlexboxScreen from "./src/screens/FlexboxScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Flexbox" component={FlexboxScreen} />
        <Stack.Screen name="Flexbox" component={FlexboxScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
