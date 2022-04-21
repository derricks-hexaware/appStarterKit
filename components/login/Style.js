import React, { Component } from "react";
import { Text, View, StyleSheet, Alert, Image, Platform, KeyboardAvoidingView } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
    imageContainer: {
      height: 120, 
      width: 120, 
      alignItems: 'center', 
      justifyContent: 'center', 
      position: 'absolute', 
      marginLeft: 133, 
      top: 50,
      ...Platform.select({
        ios: {
          marginLeft: 130,
          top: 50
        },
        android: {
          marginLeft: 113,
          top: 50
        },
      })
    }
  });