import React, { Component } from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../components/login/Login";
import { headerColor, secondaryColor } from "../constants";
import Register from "../components/register/Register";
import ForgotPassword from "../components/forgotPassword/ForgotPassword";

const Stack = createStackNavigator();

export class AuthStack extends Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTintColor: headerColor,
          headerStyle: { backgroundColor: secondaryColor },
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ title: "Register" }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ title: "Reset Password" }}
        />
      </Stack.Navigator>
    );
  }
}

export default AuthStack;
