import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Image,
} from "react-native";
import { primaryColor, tabIconColor } from "../../constants";
import _ from "lodash";
import Style from "./Style";

export class Profile extends Component {
  state = {
    uid: "",
  };

  render() {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh}
          />
        }
      >
         
      </ScrollView>
    );
  }
}

export default Profile;
