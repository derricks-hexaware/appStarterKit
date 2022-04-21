import React, { Component, useState } from "react";
import {
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  Button, 
  Text,
  Image,
  Alert,
  TextInput,
  TouchableWithoutFeedback,
  TouchableHighlight,
  ImageBackground
} from "react-native";
import { SearchBar, Card } from "react-native-elements";
import { tabIconColor, tabBackgroundColor, primaryColor } from "../../constants";

export default StyleSheet.create({
    container: { flex: 1, backgroundColor: "white" },
    searchView: {
      flex: 0.01,
      flexDirection: "row",
      justifyContent: "center",
    },
    searchBarContainer: {
      color: "black",
      flex: 1.2,
      paddingTop: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: 65,
      backgroundColor: "white",
      borderTopColor: "white",
      borderBottomColor: "white",
      width: 330, 
    },
    searchInputContainer: {
      backgroundColor: "white",
      width: 330
  
    },
    searchInput: {
      borderRadius: 10,
      backgroundColor: "#EDEDED",
      width: 330,
    },
    searchIcon: {
      flex: 0.2,
      paddingTop: 7,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
      position: "absolute",
      marginTop: 259,
      marginLeft: 38,
      height: 35,
      width: 320,
      borderRadius: 20
    },
    data: {
        fontSize: 20 
    },
    cameraButton:{
      flex: 2,
      position: "absolute",
      bottom: 5,
      right: 15,
    },
    container2: {
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      margin: 10,
      
    },
    searchResults: { marginTop: 55 },
    divider: { backgroundColor: primaryColor, height: 1.5, marginTop: -13 },
  });