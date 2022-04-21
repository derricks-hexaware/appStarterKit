import React, { Component, useState } from "react";
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";
import { primaryColor } from "../../constants";
import _ from "lodash";
import Style from "./Style";

export class Details extends Component {
  state = {
    uid: "",
  };

  render = () => {
    return (
      <ScrollView>
              <Text style={Style.titleText}>image</Text>

        <Image
          style={Style.thumbnail}
          
        />

        
        <Text style={Style.titleText}>title text</Text>

        <View style={Style.iconContainer}>
          
        </View>

        <Text style={Style.headerText}>subtext:</Text>
          

        <Text style={Style.headerText}>description:</Text>

      </ScrollView>
    );
  }
}

export default Details;
