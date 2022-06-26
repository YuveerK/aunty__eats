import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Signup from "../pages/Signup";

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: true }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: true }}
          name="SignUp"
          component={Signup}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
