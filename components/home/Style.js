import React, { Component } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Platform
} from "react-native";
import { primaryColor, tabIconColor } from "../../constants";

export default StyleSheet.create({
    titleText: {
      fontWeight: "bold",
      textDecorationLine: "underline",
    },
    productCards: {
      ...Platform.select({
        ios: {
          width: '100%',
        },
        android: {
          width: '100%',
          elevation: 5,
        }
      })
    },
    divider: { backgroundColor: primaryColor, height: 1.7, marginTop: -13 },
  });