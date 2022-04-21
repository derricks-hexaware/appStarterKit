import React, { Component } from "react";
import { Text, View, TouchableOpacity, Button, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Details from "../components/details/Details";
import Home from "../components/home/Home";
import { headerColor, secondaryColor } from "../constants";

const Stack = createStackNavigator();

export class HomeStack extends Component {
  handleLogout = () => {
    // authtool.auth().signOut();
  };
  render() {
    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: headerColor,
          headerStyle: { backgroundColor: secondaryColor },
          headerRight: (props) => (
            <TouchableOpacity onPress={this.handleLogout}>
              <Button onPress={this.handleLogout}
                {...props}
                title="Sign Out"
                color='#e63737'
                size={10}
                style={{ marginRight: 10 }}
                accessibilityLabel="Sign Out"
              />
            </TouchableOpacity>
          ),
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ title: "" }}
        />
      </Stack.Navigator>
    );
  }
}

export default HomeStack;
