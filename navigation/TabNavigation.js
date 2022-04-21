import React, { Component } from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "../components/search/Search";
import { tabBackgroundColor, tabIconColor } from "../constants";
import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";
import SearchStack from "./SearchStack";

const Tab = createBottomTabNavigator();

export class TabNavigation extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: () => {
            if (route.name === "Home") {
              return <AntDesign name="home" size={20} color={tabIconColor} />;
            } else if (route.name === "Search") {
              return <AntDesign name="search1" size={20} color={tabIconColor} />;
            } else if (route.name === "Profile") {
              return (
                <AntDesign
                  name="user"
                  size={20}
                  color={tabIconColor}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
          padding: 1,
          showLabel: false,
          activeBackgroundColor: tabBackgroundColor,
        }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Search" component={SearchStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    );
  }
}

export default TabNavigation;
