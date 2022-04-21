import React, { Component, useState } from "react";
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { primaryColor } from "../../constants";

export default StyleSheet.create({
    thumbnail: {
      height: 350,
      alignSelf: "stretch",
    },
    titleText: {
      padding: 10,
      marginTop: 10,
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 20,
    },
    headerText: {
      padding: 10,
      marginTop: 10,
      textAlign: "center",
      fontWeight: "bold",
      backgroundColor: "white",
      fontSize: 18,
  
    },
    text: {
      padding: 10,
      marginTop: 10,
      fontWeight: "bold",
    },
    divider: {
      backgroundColor: primaryColor,
      height: 1.5,
      marginTop: 15,
      marginBottom: 15,
      width: 180,
      alignSelf: "center",
    },
    iconContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-around",
    },
    ingredientContainer: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "baseline",
    },
  });
  