import React, { Component } from "react";
import { Text, View, TouchableOpacity, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Details from "../components/Details";
import { headerColor, secondaryColor } from "../constants";
import { Icon } from "react-native-elements";
import Search from "../components/search/Search";

const Stack = createStackNavigator();

export class SearchStack extends Component {
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
          component={Search}
          options={{ title: "Search" }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ title: "Details" }}
        />
       
        
      </Stack.Navigator>
    );
  }
}

export default SearchStack;
