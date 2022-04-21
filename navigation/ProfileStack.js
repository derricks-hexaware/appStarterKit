import React, { Component } from "react";
import { Text, View, TouchableOpacity, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Details from "../components/Details";
import { headerColor, secondaryColor } from "../constants";
import { Icon } from "react-native-elements";
import * as firebase from "firebase";
import Profile from "../components/Profile";
import { AntDesign } from "@expo/vector-icons";

const Stack = createStackNavigator();

export class ProfileStack extends Component {
  handleLogout = () => {
    firebase.auth().signOut();
  };
  render() {
    return (
      <Stack.Navigator
        initialRouteName="Favourites"
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
          name="Profile"
          component={Profile}
          options={{ title: "Profile" }}
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

export default ProfileStack;
